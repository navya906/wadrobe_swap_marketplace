import React, { useState } from 'react';
import ClothingCard from './ClothingCard';

const dummyClothes = [
  {
    id: 1,
    name: 'Denim Jacket',
    image: 'https://via.placeholder.com/300x400?text=Denim+Jacket',
  },
  {
    id: 2,
    name: 'Floral Dress',
    image: 'https://via.placeholder.com/300x400?text=Floral+Dress',
  },
  {
    id: 3,
    name: 'Hoodie',
    image: 'https://via.placeholder.com/300x400?text=Hoodie',
  },
];

const SwipePage = () => {
  const [clothes, setClothes] = useState(dummyClothes);

  const handleSwipe = (direction, item) => {
    console.log(`${direction} swipe on ${item.name}`);
    setClothes(prev => prev.filter(cloth => cloth.id !== item.id));
  };

  return (
    <div>
      <h2>Swipe Clothes</h2>
      {clothes.length === 0 ? (
        <p>No more clothes to swipe!</p>
      ) : (
        clothes.map(item => (
          <ClothingCard key={item.id} item={item} onSwipe={handleSwipe} />
        ))
      )}
    </div>
  );
};

export default SwipePage;
