import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, imageUrl, projectLink }) => {
    return (
        <div className="project-card">
            <h2>{title}</h2>
            <div className="image-container">
                <img src={imageUrl} alt={title} className="project-image" />
            </div>
            {/* <div className="card-content">
                <p>{description}</p>
            </div> */}
            <a href={projectLink} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    );
}

export default ProjectCard;
