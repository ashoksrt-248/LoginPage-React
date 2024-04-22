import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ".//../App.css";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === 'admin' && email === 'admin@gmail.com' && password === 'admin') {
            navigate('/admin');
        }
         else if (username === 'user' && email === 'user@gmail.com' && password === 'user') {
            navigate('/user');
        }
         else {
            navigate('/error');
        }
        
    };
    const handleForgotPassword = () => {
        navigate('/forgotPassword');
    }

    return (
        <div className='LoginPage' >
            <div className='LoginComponent'>
                <h2>Login with Your Details!...</h2>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /><br /><br />
                <input type="mail" placeholder='email id' value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
                <button onClick={handleLogin}>Login</button><br />
                <p className='para' onClick={handleForgotPassword}><a href='#'><b>Forgot Password ???</b></a></p>
            </div>
        </div>
    );
};

export default LoginPage;
