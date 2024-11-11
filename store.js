// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './reducer';

const store = configureStore({
    reducer:loginReducer,});

export default store;
