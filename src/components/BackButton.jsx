import React from 'react';

const BackButton = ({ onClick }) => {
  return (
    <button 
      className="back-button-fab circular" 
      onClick={onClick} 
      title="Back to Portfolio"
      style={{ backfaceVisibility: 'visible' }}
    >
      <div className="fab-inner">
        <ion-icon name="arrow-back-outline"></ion-icon>
      </div>
    </button>
  );
};

export default BackButton;
