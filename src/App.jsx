import React, { useState } from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import ArticleCard from './components/ArticleCard';
import ArticleModal from './components/ArticleModal';
import { articlesData } from './components/articlesData';

function App() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="App">
      <HeroSection />
      
      <div className="articles-container">
        <section className="articles-section">
          <h2 className="section-title">Essential Sustainability Topics</h2>
          <div className="articles-grid">
            {articlesData.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onClick={() => handleArticleClick(article)}
              />
            ))}
          </div>
        </section>
      </div>

      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
