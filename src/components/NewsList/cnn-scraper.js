const puppeteer = require('puppeteer')

const url = "https://www.cnn.com/business"

const cnnScraper = async () => {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox'],
    })
    const page = await browser.newPage()
    await page.goto(url, { waitUntil: 'networkidle0' })

    const headlineArticles = await page.evaluate(() => {
        const articles = document.querySelectorAll('body > div.layout__content-wrapper.layout-no-rail__content-wrapper > section.layout__wrapper.layout-no-rail__wrapper > section.layout__main.layout-no-rail__main > div > section > div > div > div > div > div > div.zone__items.layout--wide-left-balanced-2 > div > div > div.stack__items > div > div.container_lead-plus-headlines-with-images__cards-wrapper > div > div > div')

        return Array.from(articles).slice(0, 4).map((article) => {

            const title = article.querySelector('body > div.layout__content-wrapper.layout-no-rail__content-wrapper > section.layout__wrapper.layout-no-rail__wrapper > section.layout__main.layout-no-rail__main > div > section > div > div > div > div > div > div.zone__items.layout--wide-left-balanced-2 > div > div > div.stack__items > div > div.container_lead-plus-headlines-with-images__cards-wrapper > div > div > div > a > div > div > span').innerText

            
            

            return { title }

            
        })
    })
    console.log(headlineArticles)

    await browser.close()
}
cnnScraper()
