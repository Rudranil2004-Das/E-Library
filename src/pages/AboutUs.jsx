import React from 'react';
import './AboutUs.css'; // Assuming you'll create a CSS file for styling

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
                        <h3>Soumadip Chandra</h3>
                        <p>Lead Developer</p>
                    </div>
                    <div className="team-member">
                        <h3>Bristi Chakraborty</h3>
                        <p>Frontend Developer</p>
                    </div>
                    <div className="team-member">
                        <h3>Wasima Islam</h3>
                        <p>Backend Developer</p>
                    </div>
                    <div className="team-member">
                        <h3>Partha Biswas</h3>
                        <p>UI/UX Designer</p>
                    </div>
                    <div className="team-member">
                        <h3>Priya Bhattacharya</h3>
                        <p>Quality Assurance</p>
                    </div>
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
