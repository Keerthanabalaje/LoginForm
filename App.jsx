// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from './components/Login';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Login />
      </div>
    </Provider>
  );
};

export default App;
