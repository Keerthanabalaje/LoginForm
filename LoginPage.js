// src/components/LoginPage.js
import React from 'react';
import './LoginPage.css';
import loginImage from '../assets/Image.jpeg'; // Import the image
import Login from './Login'

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
          
          <Login/>
          {/* Form content goes here */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
