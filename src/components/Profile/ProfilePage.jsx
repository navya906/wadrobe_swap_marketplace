import React from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  const user = {
    name: 'Ekanshi Yadav',
    location: 'Chennai',
    email: 'ekanshi@example.com',
    profileImage: '/user.jpg',
  };

  return (
    <div className="profile-container">
      <h2 className="profile-header">Your Profile</h2>
      <img className="profile-image" src={user.profileImage} alt={user.name} />
      <div className="profile-info">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Location:</strong> {user.location}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
      <div className="profile-actions">
        <button>Edit</button>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default ProfilePage;


