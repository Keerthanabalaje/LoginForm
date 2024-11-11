// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import LoginPage from './components/LoginPage';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <LoginPage />
      </div>
    </Provider>
  );
};

export default App;
