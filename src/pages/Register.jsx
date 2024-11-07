import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './Register.css';

const Register = ({ setIsRegistered }) => {
    const navigate = useNavigate();
    
    // State for form inputs
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    // State for form errors
    const [errors, setErrors] = useState({});

    // Validate form data
    const validateForm = () => {
        const newErrors = {};
        
        if (!username) newErrors.username = 'Username is required';
        if (!email) newErrors.email = 'Email is required';
        if (!password) newErrors.password = 'Password is required';
        if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleRegister = (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            // Store user data in localStorage
            const userData = { username, email, password };
            localStorage.setItem('registeredUser', JSON.stringify(userData));
            localStorage.setItem('registered', true);  // Also store registration flag
            
            setIsRegistered(true);

            alert('Registration successful! You can now log in.');
            
            // Reset the form
            setUsername('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            
            // Redirect to login page after successful registration
            navigate('/login');
        }
    };

    return (
        <div className="form-container">
    <h2>Register</h2>
    <form onSubmit={handleRegister}>
        <div className="input-group">
            <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
            />
            {errors.username && <span className="error-message">{errors.username}</span>}
        </div>
        <div className="input-group">
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <div className="input-group">
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
        </div>
        <div className="input-group">
            <input 
                type="password" 
                placeholder="Confirm Password" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                required 
            />
            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
        </div>
        <button type="submit" className="submit-btn">Register</button>
    </form>
</div>

    );
};

export default Register;
