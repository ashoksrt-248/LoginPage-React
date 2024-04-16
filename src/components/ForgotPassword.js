import React from 'react';
import { useNavigate } from 'react-router-dom';
import ".//../App.css";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/')
    }
    
    return (
        <div className='LoginPage'>
            <div className='LoginComponent'>
                <h2>Forgot Password!!!!...</h2>
                <h3>Don't Worry....</h3>
                <input type="mail" placeholder='Enter Your Email id' /><br /><br />
                <input type="password" placeholder='enter your new Password' /><br /><br />
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default ForgotPassword;
