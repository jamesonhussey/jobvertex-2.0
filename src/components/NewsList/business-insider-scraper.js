const puppeteer = require('puppeteer')

const url = "https://www.businessinsider.com/category/job-market"

const cnbcScraper = async () => {
    const browser = await puppeteer.launch({
        args: [
            '--no-sandbox',
            '--window-size:1920,1080'
        ],
    })
    const page = await browser.newPage()
    await page.goto(url, { waitIntil: 'networkidle0'})

    const headlineArticles = await page.evaluate(() => {
        const articles = document.querySelectorAll('#l-content > section > article')

        return Array.from(articles).map((article) => {

            const title = article.querySelector('#l-content > section > article > h3 > a').innerText

            const url = article.querySelector('#l-content > section > article > h3 > a').href

            

            const urlToImage = article.querySelector('#l-content > section > article > a > div > img').src

            // const pubDate = article.querySelector('.Card-time').innerText
            

            return { title, url, urlToImage }

            
        })
    })

    console.log(headlineArticles)

    await browser.close()
}
cnbcScraper()