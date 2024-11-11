// src/components/Login.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername, setPassword } from '../redux/actions';

const Login = () => {
  const dispatch = useDispatch();
  const { username, password } = useSelector((state) => state);
  const [submitted, setSubmitted] = useState(false);
  const [displayedUsername, setDisplayedUsername] = useState('');

  const handleUsernameChange = (e) => {
    dispatch(setUsername(e.target.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(setPassword(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayedUsername(username); 
    setSubmitted(true);

    dispatch(setUsername(''));
    dispatch(setPassword(''));
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>

      {submitted && (
        <div>
          <h3>Login Successful!</h3>
          <p>Welcome, <strong>{displayedUsername}</strong>!</p>
        </div>
      )}
    </div>
  );
};

export default Login;
