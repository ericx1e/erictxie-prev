import React from 'react';
import './AboutPage.css';

function AboutPage() {
    return (
        <div className="about-page">
            <div className="bullet-points">
                <ul>
                    <li>
                        <i className="bullet-icon fas fa-graduation-cap"></i> Sophomore at The University of Maryland, College Park
                    </li>
                    <li>
                        <i className="bullet-icon fas fa-scroll"></i> Majors in Computer Science and Mathematics, minor in Computational Finance
                    </li>
                    <li>
                        <i className="bullet-icon fas fa-globe"></i> Based in Boston, Massachusetts
                    </li>
                    <li>
                        <i className="bullet-icon fas fa-face-smile"></i> I enjoy pickleball, building games, watching videos, and playing TFT
                    </li>
                    <li>
                        <i className="bullet-icon fas fa-lightbulb"></i> I am interested in machine learning, web dev, finance, algorithms, and genAI
                    </li>
                </ul>
            </div>
            <div className="image-section">
                <img className="round-image" src="images/eric1.png" alt="Eric" />
            </div>
        </div>
    )
}

export default AboutPage;