import React from 'react';
import './AboutUs.css'; 

const AboutUs = () => {
    return (
        <section className="about-section">
            <div className="container">
                <h2>About Us</h2>
                <p>
                    We are a team of passionate individuals dedicated to providing the best e-library experience. Meet our talented members:
                </p>
                <div className="team-grid">
                    <div className="team-member">
                        <h3>Rudranil Das</h3>
                        <p>Support Specialist</p>
                        <p>Contact No.: 7439088691</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
