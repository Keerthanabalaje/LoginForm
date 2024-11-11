import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {setUsername } from './redux/actions';
import {setPassword } from './redux/actions';
const Login=()=>{
    const dispatch=useDispatch()
    const {username,password}=useSelector((state)=>state);
    const handleUsername=(e)=>{
        dispatch(setUsername(e.target.value);)
    };
    const handlePassword=(e)=>{
        dispatch(setPassword(e.target.value);)
    };
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("Attempted login",{username})
    }
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>UserName : </label>
                    <input type="text"value={username}
                    onChange={handleUsername} />
                </div>
                <div>
                <label>Password : </label>
                    <input type="password"value={password}
                    onChange={handlePassword}/>

                </div>
                <button type="submit">Submit</button>
                </form>
            </div>
    )
}
export default Login;
