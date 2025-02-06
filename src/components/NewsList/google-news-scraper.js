const puppeteer = require('puppeteer')

const url = "https://news.google.com/rss/search?q=job+market&hl=en-US&gl=US&ceid=US:en"

const googleScraper = async () => {
    const browser = await puppeteer.launch({
        args: [
            '--no-sandbox',
            '--window-size:1920,1080'
        ],
    })
    const page = await browser.newPage()
    await page.goto(url, { waitUntil: 'networkidle0'})
    

   
    const headlineArticles = await page.evaluate(() => {
        const articles = document.querySelectorAll('.folder')

        return Array.from(articles).slice(2).map((article) => {

            const title = article.querySelector('.folder > div.opened > div:nth-child(1) > span:nth-child(2)').innerText

            const url = article.querySelector('.folder > div.opened > div:nth-child(2) > span:nth-child(2)').innerText

            const pubDate = article.querySelector('.folder > div.opened > div:nth-child(4) > span:nth-child(2)').innerText
            

            return { title, url, pubDate }
        })
    })

    console.log(headlineArticles)

    await browser.close()
}
googleScraper()