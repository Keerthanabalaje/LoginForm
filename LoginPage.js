// src/components/LoginPage.js
import React from 'react';
import Login from './Login';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-page">
      {/* Left side image */}
      <div className="login-image">
        <img
          src="https://via.placeholder.com/400" // Replace with your image URL
          alt="Login Illustration"
        />
      </div>

      {/* Right side login form */}
      <div className="login-form">
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
