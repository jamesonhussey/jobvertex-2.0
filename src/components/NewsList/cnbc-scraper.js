const puppeteer = require('puppeteer')

const url = "https://www.cnbc.com/jobs/"

const cnbcScraper = async () => {
    const browser = await puppeteer.launch({
        args: [
            '--no-sandbox',
            '--window-size:1920,1080'
        ],
    })
    const page = await browser.newPage()
    await page.goto(url)
    
    const headlineArticles = await page.evaluate(() => {
        const articles = document.querySelectorAll('.Card-standardBreakerCard')

        return Array.from(articles).slice(0, 4).map((article) => {

            const title = article.querySelector('.Card-title').innerText

            const url = article.querySelector('a').href

            const urlToImage = article.querySelector('picture > source').srcset

            const pubDate = article.querySelector('.Card-time').innerText
            

            return { title, url, urlToImage, pubDate }

            
        })
    })

    // await page.waitForSelector('RiverCard-standardBreakerCard RiverCard-specialReportsRiver RiverCard-card');

    // const moreArticles = await page.evaluate(() => {
    //     const articles = document.querySelectorAll('.RiverCard-standardBreakerCard')

    //     return Array.from(articles).slice(0, 4).map((article) => {

    //         const title = article.querySelector('.RiverCard-title').innerText

    //         // const url = article.querySelector('a').href

    //         // const urlToImage = article.querySelector('RiverCard-mediaContainerInner').src

    //         // const pubDate = article.querySelector('.RiverCard-time').innerText
            

    //         return { title }

            
    //     })
    // })

    console.log(headlineArticles)

    await browser.close()
}
cnbcScraper()