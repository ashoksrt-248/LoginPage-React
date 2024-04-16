import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginPage from './components/LoginPage';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import ErrorPage from './components/ErrorPage';
import ForgotPassword from './components/ForgotPassword';
import loginImage from "./images/login.jpg";

const App = () => {
    return (
        <div className='main'
        style={{ 
            backgroundImage: `url(${loginImage})`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}
        >
        <h1 className='loginHeading'>Login Application</h1>
        <BrowserRouter>
            <Routes>
                <Route path="" index element={< LoginPage />} />
                <Route path="/admin" element={< AdminDashboard />} />
                <Route path="/user" element={< UserDashboard />} />
                <Route path="/Error" element={< ErrorPage />} />
                <Route path="/forgotPassword" element={< ForgotPassword />} />
            </Routes>
        </BrowserRouter>
        </div>
    );
};

export default App;
