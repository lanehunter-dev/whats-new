import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  return (
    <article id={props.id}>
      <img src={props.img} alt={props.headline}></img>
      <h3>{props.headline}</h3>
      <p>{props.description}</p>
      <a href={props.url}>Link to article</a>
    </article>
  )
}

export default NewsArticle;
