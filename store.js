import {createStore}from 'react-redux';
import loginReducer from './reducer'
const store= createStore(loginReducer);
export default store;
