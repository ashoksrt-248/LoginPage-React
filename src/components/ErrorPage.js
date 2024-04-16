import React from 'react';
import { useNavigate } from 'react-router-dom';
import ".//../App.css";

const ErrorPage = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/");
    }
    return (
        <div className='LoginPage'>
            <div className='LoginComponent'>
                <h2>Error !!!!!......</h2>
                <h3>You are entered wrong details.please enter correct details</h3>
                <button onClick={handleLogin}>Go to Login Page</button>
            </div>
        </div>
    );
};

export default ErrorPage;
