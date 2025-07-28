import React, { useState } from 'react';
import SwapPage from './components/swap/SwapPage';
import './App.css';

// Mock data for clothing items
const mockClothingData = [
  {
    id: 1,
    title: "Vintage Denim Jacket",
    brand: "Levi's",
    size: "M",
    condition: "Excellent",
    price: 45,
    owner: "Sarah",
    ownerId: "user_2",
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=600&fit=crop"
  },
  {
    id: 2,
    title: "Floral Summer Dress",
    brand: "H&M",
    size: "S",
    condition: "Good",
    price: 25,
    owner: "Emma",
    ownerId: "user_3",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop"
  },
  {
    id: 3,
    title: "Leather Biker Jacket",
    brand: "Zara",
    size: "L",
    condition: "Very Good",
    price: 80,
    owner: "Alex",
    ownerId: "user_4",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=600&fit=crop"
  },
  {
    id: 4,
    title: "Cozy Knit Sweater",
    brand: "Uniqlo",
    size: "M",
    condition: "Excellent",
    price: 30,
    owner: "Maya",
    ownerId: "user_5",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=600&fit=crop"
  },
  {
    id: 5,
    title: "High-Waisted Jeans",
    brand: "American Eagle",
    size: "28",
    condition: "Good",
    price: 35,
    owner: "Jessica",
    ownerId: "user_6",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=600&fit=crop"
  },
  {
    id: 6,
    title: "Silk Blouse",
    brand: "Banana Republic",
    size: "S",
    condition: "Excellent",
    price: 40,
    owner: "Rachel",
    ownerId: "user_7",
    image: "https://images.unsplash.com/photo-1564257577-7eacab8ba5d0?w=400&h=600&fit=crop"
  },
  {
    id: 7,
    title: "Wool Coat",
    brand: "J.Crew",
    size: "M",
    condition: "Very Good",
    price: 120,
    owner: "Sophie",
    ownerId: "user_8",
    image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=400&h=600&fit=crop"
  },
  {
    id: 8,
    title: "Casual T-Shirt",
    brand: "Gap",
    size: "L",
    condition: "Good",
    price: 15,
    owner: "Mike",
    ownerId: "user_9",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=600&fit=crop"
  },
  {
    id: 9,
    title: "Evening Gown",
    brand: "ASOS",
    size: "M",
    condition: "Excellent",
    price: 85,
    owner: "Isabella",
    ownerId: "user_10",
    image: "https://images.unsplash.com/photo-1566479179817-1fb1e57d1b2a?w=400&h=600&fit=crop"
  },
  {
    id: 10,
    title: "Sports Hoodie",
    brand: "Nike",
    size: "L",
    condition: "Good",
    price: 40,
    owner: "Chris",
    ownerId: "user_11",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=600&fit=crop"
  }
];

function App() {
  const [currentPage, setCurrentPage] = useState('swap'); // 'swap' or 'profile'
  const [userSwipes, setUserSwipes] = useState([]);
  const [matches, setMatches] = useState([]);
  const [notifications, setNotifications] = useState([]);

  const handleMatch = (matchData) => {
    // Add new match
    setMatches(prevMatches => [...prevMatches, matchData]);
    
    // Add notification
    const notification = {
      id: Date.now(),
      type: 'match',
      message: `It's a match! You both liked each other's items.`,
      timestamp: new Date().toISOString(),
      read: false
    };
    setNotifications(prevNotifs => [...prevNotifs, notification]);
    
    // Show match popup (you can implement this later)
    console.log('New match!', matchData);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-icon">👕</span>
            <span className="logo-text">WardrobeSwap</span>
          </div>
          
          <div className="nav-links">
            <button 
              className={`nav-btn ${currentPage === 'swap' ? 'active' : ''}`}
              onClick={() => handlePageChange('swap')}
            >
              <span className="nav-icon">🔄</span>
              Swap
            </button>
            <button 
              className={`nav-btn ${currentPage === 'profile' ? 'active' : ''}`}
              onClick={() => handlePageChange('profile')}
            >
              <span className="nav-icon">👤</span>
              Profile
              {notifications.filter(n => !n.read).length > 0 && (
                <span className="notification-badge">
                  {notifications.filter(n => !n.read).length}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {currentPage === 'swap' && (
          <SwapPage 
            clothingItems={mockClothingData}
            onMatch={handleMatch}
            userSwipes={userSwipes}
            setUserSwipes={setUserSwipes}
          />
        )}
        
        {currentPage === 'profile' && (
          <div className="profile-placeholder">
            <div className="placeholder-content">
              <h2>👤 Profile Page</h2>
              <p>Coming in the next step!</p>
              <div className="stats-preview">
                <div className="stat">
                  <strong>{matches.length}</strong>
                  <span>Matches</span>
                </div>
                <div className="stat">
                  <strong>{userSwipes.filter(s => s.direction === 'right').length}</strong>
                  <span>Likes Given</span>
                </div>
                <div className="stat">
                  <strong>{notifications.length}</strong>
                  <span>Notifications</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Match Popup (shows when there's a new match) */}
      {matches.length > 0 && (
        <div className="match-popup-overlay" style={{ display: 'none' }}>
          <div className="match-popup">
            <h2>🎉 It's a Match!</h2>
            <p>You both liked each other's items!</p>
            <button className="close-popup-btn">Start Chatting</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;