import React from 'react';

const ClothingCard = ({ item, onSwipe }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: 10, marginBottom: 20 }}>
      <img src={item.image} alt={item.name} width="300" height="400" />
      <h3>{item.name}</h3>
      <button onClick={() => onSwipe('left', item)}>❌ Left</button>
      <button onClick={() => onSwipe('right', item)}>✅ Right</button>
    </div>
  );
};

export default ClothingCard;
