import React from 'react';
import './ProjectPage.css';
import ProjectCard from './ProjectCard';

const ProjectPage = () => {
    const projects = [
        {
            title: 'Word Bord',
            description: 'Description for Project 1',
            imageUrl: '/images/wordbord.png',
            projectLink: 'https://wordbord.com/',
        },
        {
            title: 'Studybrew',
            description: 'Description for Project 1',
            imageUrl: '/images/studybrew.png',
            projectLink: 'https://studybrew.netlify.app/',
        },
        {
            title: 'Learning Opt.',
            description: 'Description for Project 1',
            imageUrl: '/images/trainingdataselection.png',
            projectLink: 'https://colab.research.google.com/drive/1ZrtsdGgVCqhoiYWFOSiuKyl5STq4pNUu',
        },
        {
            title: '24 Card Game',
            description: 'Description for Project 1',
            imageUrl: '/images/24thegame.png',
            projectLink: 'https://24thegame.com/',
        },
        {
            title: 'Battle Simulator',
            description: 'Description for Project 1',
            imageUrl: '/images/battle.png',
            projectLink: 'https://ericx1e.github.io/Battle-JS/',
        },
        {
            title: '3 Body Problem',
            description: 'Description for Project 1',
            imageUrl: '/images/3body.png',
            projectLink: 'https://ericxie.itch.io/3body',
        },
        {
            title: 'Primes',
            description: 'Description for Project 1',
            imageUrl: '/images/primes.png',
            projectLink: 'https://primebord.com',
        },
    ];

    return (
        <div className="project-page">
            <div className="project-card-container">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        projectLink={project.projectLink}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProjectPage;
