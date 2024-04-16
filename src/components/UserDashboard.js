import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/");
    }
    return (
        <div className='LoginPage'>
            <div className='LoginComponent'>
                <h2>User Dashboard</h2>
                <h3>Normal users only see this page</h3>
                <h4> Welcome Ashok Amara. you are a user here. you have only limited access in this application</h4>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default UserDashboard;
