import React, { useState, useEffect } from 'react';
import { fetchUserData } from '../api/userService';
import UserStats from './UserStats';
import UserActivity from './UserActivity';

function UserProfile({ userId }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function fetchUser() {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetchUserData(userId);
        setUser(response);
      } catch (err) {
        setError('Failed to load user profile');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    
    fetchUser();
  }); // Missing dependency array
  
  function handleUpdateProfile(updatedData) {
    setUser({ ...user, ...updatedData });
  }
  
  if (error) return <div className="error-message">{error}</div>;
  
  return (
    <div className="profile">
      {loading && <div className="loading-spinner">Loading...</div>}
      
      {!loading && (
        <>
          <header className="profile-header">
            <img 
              src={user.avatarUrl} 
              alt={`${user.name}'s avatar`} 
              className="avatar"
            />
            <h1>{user.name}</h1>
            <p className="user-title">{user.jobTitle}</p>
          </header>
          
          <section className="profile-details">
            <p>{user.email}</p>
            <p>{user.location}</p>
            <p>Member since: {new Date(user.joinDate).toLocaleDateString()}</p>
          </section>
          
          <UserStats statistics={user.stats} />
          <UserActivity userId={userId} limit={5} />
          
          <button 
            onClick={() => handleUpdateProfile({ status: 'active' })}
            className="status-button"
          >
            Set Active
          </button>
        </>
      )}
    </div>
  );
}

export default UserProfile;