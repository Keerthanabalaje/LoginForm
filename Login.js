// src/components/Login.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername, setPassword } from '../redux/actions';

const Login = () => {
  const dispatch = useDispatch();
  const { username, password } = useSelector((state) => state);

  const handleUsernameChange = (e) => {
    dispatch(setUsername(e.target.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(setPassword(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    console.log('Login Attempt:', { username, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
