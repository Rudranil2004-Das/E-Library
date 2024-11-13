import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import BookList from './pages/BookList';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import AboutUs from './pages/AboutUs';
import { Analytics } from "@vercel/analytics/react"
function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);

    // Check if token exists in localStorage when app loads
    useEffect(() => {
        const token = localStorage.getItem('token');
        const registered = localStorage.getItem('registered');

        if (token) {
            setIsAuthenticated(true);
        }
        if (registered) {
            setIsRegistered(true);
        }
    }, []);

    // Protected Route for authenticated users
    const ProtectedRoute = ({ children }) => {
        if (!isAuthenticated) {
            return <Navigate to="/login" />; // Redirect to login if not authenticated
        }
        return children;
    };

    // Registration Check Route for users that need to register first
    const RegistrationCheckRoute = ({ children }) => {
        if (!isRegistered) {
            return <Navigate to="/register" />; // Redirect to register if not registered
        }
        return children;
    };

    return (
        <Router>
            {/* Navbar that adjusts based on authentication state */}
            <Navbar isAuthenticated={isAuthenticated} />
            <Routes>
                {/* Routes accessible without authentication */}
                <Route path="/register" element={<Register setIsRegistered={setIsRegistered} />} />

                {/* Allow login only if registered */}
                <Route path="/login" element={
                    <RegistrationCheckRoute>
                        <Login setIsAuthenticated={setIsAuthenticated} />
                    </RegistrationCheckRoute>
                } />

                {/* Protected routes for authenticated users */}
                <Route path="/" element={
                    <ProtectedRoute>
                        <HomePage />
                    </ProtectedRoute>
                } />
                <Route path="/books" element={
                    <ProtectedRoute>
                        <BookList />
                    </ProtectedRoute>
                } />
                <Route path="/about" element={
                    <ProtectedRoute>
                        <AboutUs />
                    </ProtectedRoute>
                } />

                {/* Catch-all for undefined routes */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}

export default App;
