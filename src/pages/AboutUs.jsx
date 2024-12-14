import React from 'react';
import './AboutUs.css'; 

const AboutUs = () => {
    return (
        <section className="about-section">
            <div className="container">
                <h2>About Us</h2>
                <p>
                    Welcome to our Book Search platform, designed to offer a simple and efficient way to explore and discover books. Our mission is to create a user-friendly experience that makes finding your next read both easy and enjoyable.
                </p>
                <div className="team-grid">
                    <div className="team-member">
                        <h3>Rudranil Das</h3>
                        <p>Founder & Lead Developer</p>
                        <p>Contact: +91 74390 88691</p>
                    </div>
                    <div className="team-member">
                        <h3>Priya Bhattacharya</h3>
                        <p>UX Designer</p>
                    </div>
                    <div className="team-member">
                        <h3>Bristi Chakraborty</h3>
                        <p>Content Strategist</p>
                    </div>
                    <div className="team-member">
                        <h3>Wasim Islam</h3>
                        <p>Backend Developer</p>
                    </div>
                    <div className="team-member">
                        <h3>Partha Biswas</h3>
                        <p>Front-End Developer</p>
                    </div>
                    <div className="team-member">
                        <h3>Soumadip Chandra</h3>
                        <p>Marketing Specialist</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
