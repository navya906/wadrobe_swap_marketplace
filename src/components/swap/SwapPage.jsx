import React, { useState } from 'react';
import ClothingCard from './ClothingCard';
import './SwapPage.css'; // ✅ Make sure this CSS file exists in the same folder

const SwapPage = () => {
  const [clothes, setClothes] = useState([
    { id: 1, name: 'Red Jacket', image: '/red.jpg' },
    { id: 2, name: 'Blue Dress', image: '/blue.jpg' },
    { id: 3, name: 'Yellow Hoodie', image: '/yellow.jpg' },
    // Add up to 10 items
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction, item) => {
    console.log(`Swiped ${direction} on`, item.name);
    setCurrentIndex((prev) => prev + 1);
  };

  const currentItem = clothes[currentIndex];

  return (
    <div className="swap-container">
      <h2 className="title">👗 Swap Clothes</h2>
      {currentItem ? (
        <ClothingCard item={currentItem} onSwipe={handleSwipe} />
      ) : (
        <p className="end-message">🎉 No more clothes to swipe!</p>
      )}
    </div>
  );
};

export default SwapPage;


