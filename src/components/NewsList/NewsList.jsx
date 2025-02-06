import React, { useState, useEffect } from "react";
import axios from 'axios'
import NewsListItem from "./NewsListItem";

const date = new Date()
let day = date.getDate()
let month = date.getMonth()
let year = date.getFullYear()

const NewsList = ({ articles }) => {
    return (
        <div>
            {articles.map(article => {
                return (
                    <NewsListItem
                        title={article.title}
                        pubDate={article.pubDate}
                        url={article.url}
                        urlToImage={article.imageUrl}
                    />
                )
            })}
        </div>
    )
}

export default NewsList