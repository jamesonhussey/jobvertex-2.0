import NewsList from "../../components/NewsList/NewsList";
import { useState, useEffect } from "react";
import { getAll } from '../../utilities/articles-api'

export default function HomePage() {
  const [articleItems, setArticleItems] = useState([])

  useEffect(function () {
    async function getArticles() {
      const articles = await getAll()
      setArticleItems(articles)
    }
    getArticles()
  }, [])
  articleItems.sort(function(a,b) {
    return new Date(b.pubDate) - new Date(a.pubDate);
  })
  return (
    <>
      <h1>Job Market News Feed</h1>
      <NewsList articles={articleItems}/>
    </>
  );
}