import React from 'react';
import './ClothingCard.css';

const ClothingCard = ({ item, onSwipe }) => {
  return (
    <div className="card">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <button onClick={() => onSwipe('left', item)}>❌ Left</button>
      <button onClick={() => onSwipe('right', item)}>✅ Right</button>
    </div>
  );
};

export default ClothingCard;
