const mongoose = require('mongoose');
const puppeteer = require('puppeteer')
const articleController = require('../controllers/api/articles')
const Article = require('../models/article');
const imageSearcher = require('./image-search')

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});

// Convert ms to minutes and set time before scraping repeats itself
const minutesToWait = 60
const interval = minutesToWait * 60000
setInterval(scrape, interval)




async function scrape() {
  rnDate = new Date()
  console.log("Starting to scrape - " + rnDate.toUTCString())
  const url = "https://news.google.com/rss/search?q=job+market&hl=en-US&gl=US&ceid=US:en"



  const googleScraper = async () => {
    const browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--window-size:1920,1080'
      ],
    })

    const page = await browser.newPage()
    await page.goto(url, { waitUntil: 'networkidle0' })



    const headlineArticles = await page.evaluate(() => {
      const articles = document.querySelectorAll('.folder')

      return Array.from(articles).slice(2, 35).map((article) => {

        const title = article.querySelector('.folder > div.opened > div:nth-child(1) > span:nth-child(2)').innerText

        const url = article.querySelector('.folder > div.opened > div:nth-child(2) > span:nth-child(2)').innerText

        const pubDate = article.querySelector('.folder > div.opened > div:nth-child(4) > span:nth-child(2)').innerText


        return { title, url, pubDate }
      })
    })

    // console.log(headlineArticles)

    await browser.close()

    return headlineArticles
  }

  const articlesArray = await googleScraper()

  for await (const article of articlesArray) {
    const thisArticleTitle = await Article.findOne({ title: article.title })
    const thisArticleUrl = await Article.findOne({ title: article.url })
    if (!thisArticleTitle && !thisArticleUrl) {
      try {
        console.log('Article titled "' + article.title + '" not yet in database, adding it now...')
        articleController.create(article)
        console.log("Article added, go next...")
      } catch (err) {
        console.log("Error: " + err)
      }
    }
    else {
      console.log("Article already in database, go next...")
    }
  }
  console.log("Finished with article adding phase, moving to image attachment...")
  for await (const article of articlesArray) {
    console.log("Checking if article has associated image...")
    const thisArticleTitle = await Article.findOne({ title: article.title })
    if (!thisArticleTitle.imageUrl) {
      console.log("Article has no associated image...")
      try {
        const imageUrlToAdd = await imageSearcher.searchGoogleImages(article.title)
        await Article.findOneAndUpdate({ title: article.title }, { imageUrl: imageUrlToAdd })
      } catch (err) {
        // possibly add this image to articles that fail to get an image
        // https://i-invdn-com.investing.com/news/news_headline_rolled_69x52._800x533_L_1419494221.jpg
        setTimeout(() => {
          console.log("Error: " + err + ", moving on in 5 seconds...")
        }, 5000)
      }
      console.log("Image add complete...")
    }
    else {
      console.log("Article already has an associated image...")
    }
  }
  console.log("Article database update is done.")
}