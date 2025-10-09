import React from 'react';
import './ArticleCard.css';

function ArticleCard({ article, onClick }) {
  return (
    <div className="article-card" onClick={onClick}>
      <div className="article-image-container">
        <img 
          src={article.image} 
          alt={article.title} 
          className="article-image"
        />
        <div className="article-date">{article.date}</div>
      </div>
      <div className="article-content">
        <h3 className="article-title">{article.title}</h3>
        <p className="article-excerpt">{article.excerpt}</p>
        <button className="read-more-button">Read More →</button>
      </div>
    </div>
  );
}

export default ArticleCard;
