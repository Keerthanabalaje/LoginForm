// src/components/LoginPage.js
import React from 'react';
import './LoginPage.css';
import loginImage from './assets/login-image.jpg'; // Import the image

const LoginPage = () => {
  return (
    <div className="container">
      <div className="login-wrapper">
        <div
          className="login-image"
          style={{
            backgroundImage: `url(${loginImage})`, // Set the image as background dynamically
          }}
        ></div>
        <div className="login-form">
          <h2>Login</h2>
          {/* Form content goes here */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
