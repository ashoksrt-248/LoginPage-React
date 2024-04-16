import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/");
    }
    return (
        <div className='LoginPage'>
            <div className='LoginComponent'>
                <h2>Admin Dashboard</h2>
                <h4>Admin only can see this page</h4>
                <h4>Welcome Admin. you have all Access in this Application. you can do all activities here</h4>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default AdminDashboard;
