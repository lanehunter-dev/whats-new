import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle'
import './NewsContainer.css'

const NewsContainer = (props) => {
  const newsArticles = props.articles.map(article => {
    return (
      <NewsArticle
        id={article.id}
        headline={article.headline}
        img={article.img}
        description={article.description}
        url={article.url}
        />
    )
  })
  return (
    <section className="news-container">
      {newsArticles}
    </section>
  )
}

export default NewsContainer;
