import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SwipePage from './components/Swipe/SwipePage';
import ProfilePage from './components/Profile/ProfilePage';
import ChatPage from './components/Chat/ChatPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/swap" />} />
      <Route path="/swap" element={<SwipePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  );
}

export default App;
