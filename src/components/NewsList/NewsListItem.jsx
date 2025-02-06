import React from "react";
import './NewsList.css'

const NewsListItem = ({ title, url, pubDate, urlToImage }) => {
    return (
        <div className="news-app">
            <div className="news-item">
                <img className="news-img" src={urlToImage} alt={urlToImage} />
                <h3><a href={url}>{title}</a></h3>
                <p>{pubDate}</p>
            </div>
        </div>
    )
}

export default NewsListItem