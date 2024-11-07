import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Handle form submission for login
    const handleLogin = (e) => {
        e.preventDefault();

        // Retrieve registered user data from localStorage
        const registeredUser = localStorage.getItem('registeredUser'); 
        
        if (registeredUser) {
            const user = JSON.parse(registeredUser);

            // Validate email and password match with registered user
            if (email === user.email && password === user.password) {
                // Store token in localStorage to simulate authentication
                localStorage.setItem('token', 'your-token-here'); 
                setIsAuthenticated(true); // Set authentication to true

                // Redirect to home page after successful login
                navigate('/');
            } else {
                setError('Invalid email or password. Please check and try again.');
            }
        } else {
            setError('No registered user found. Please ensure you have registered first.');
        }
    };

    return (
        <div className="login-container">
            <h2>Login to Your Account</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleLogin} className="login-form">
                <input 
                    type="email" 
                    placeholder="Email Address" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                    className="form-input"
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                    className="form-input"
                />
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
};

export default Login;
