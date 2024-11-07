import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './Login.css';

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
                setError('Invalid credentials. Please try again.');
            }
        } else {
            setError('Please register before logging in.');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleLogin}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
