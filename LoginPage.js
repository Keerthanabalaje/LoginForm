// src/components/LoginPage.js
import React from 'react';
import Login from './Login'; // Import Login component
import './LoginPage.css'; // Import the CSS for styling

const LoginPage = () => {
  return (
    <div className="container">
      <div className="login-wrapper">
        {/* Left side image */}
        <div className="login-image"></div>

        {/* Right side login form */}
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
