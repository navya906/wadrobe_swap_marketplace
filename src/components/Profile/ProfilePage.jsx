import React from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  const clothingItems = [
    { id: 1, name: 'Red T-shirt', image: '/images/red.png' },
    { id: 2, name: 'Blue Jeans', image: '/images/red.png' }, // replace with actual image later
    { id: 3, name: 'White Hoodie', image: '/images/red.png' },
  ];

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img className="profile-avatar" src="/images/red.png" alt="Profile" />
        <div>
          <h2>Ekanshi Yadav</h2>
          <p>Fashion lover | Clothing swap enthusiast</p>
        </div>
      </div>

      <h3 className="section-title">My Clothing Items</h3>
      <div className="clothing-grid">
        {clothingItems.map(item => (
          <div className="clothing-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
