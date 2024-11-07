import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = ({ isAuthenticated }) => {
    return (
        <nav>
            <div className="nav-links">
                <Link to="/">Home</Link>
                {!isAuthenticated && <Link to="/login">Login</Link>}
                {!isAuthenticated && <Link to="/register">Register</Link>}
                {isAuthenticated && <Link to="/books">Books</Link>}
                {isAuthenticated && <Link to="/about">About Us</Link>}
            </div>
        </nav>
    );
};

export default Navbar;
