import React, { useEffect } from 'react';
import './ArticleModal.css';

function ArticleModal({ article, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-container">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        
        <div className="modal-image-container">
          <img 
            src={article.image} 
            alt={article.title} 
            className="modal-image"
          />
        </div>
        
        <div className="modal-content">
          <div className="modal-date">{article.date}</div>
          <h2 className="modal-title">{article.title}</h2>
          <div className="modal-body">
            {article.content.map((paragraph, index) => (
              <p key={index} className="modal-paragraph">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleModal;
