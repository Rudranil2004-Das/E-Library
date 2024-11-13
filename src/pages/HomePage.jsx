import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    const navigate = useNavigate();

    const handleExploreClick = () => {
        navigate('/BookList'); // Update path here
    };

    return (
        <div className="homepage">
            <div className="text-content">
                <h1>Welcome to Your Next Great Adventure</h1>
                <p>Discover, explore, and immerse yourself in a world of endless books and knowledge. Whether you're looking for the next bestseller or exploring hidden gems, we've got it all. Start your literary journey today!</p>
            </div>
        </div>
    );
};

export default HomePage;
