const Article = require('../../models/article');

module.exports = {
    create,
    index,
}

async function create(scrapedArticle) {
    const scrapedArticleValues = {
        title: scrapedArticle.title,
        url: scrapedArticle.url,
        pubDate: scrapedArticle.pubDate
    }
    const article = await Article.create(scrapedArticleValues); 
}

async function index(req, res) {
    const articles = await Article.find({})
    // .sort('name').populate('category').exec();
    // re-sort based upon the sortOrder of the populated categories
    // items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    res.json(articles);
  }