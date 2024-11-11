import React from 'react';
import {Provider} from 'react-redux'
import store from './redux/store'
import Login from './Login';
const App=()=>{
  return(
    <Provider store={store}>
    <div>
    <Login/>
    </Provider>
    </div>
      
  )
}
export default App;
