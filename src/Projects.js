import React from 'react';
import NavigationArrows from './NavigationArrows';

const projectsData = [
    {
        title: 'VisiTrack',
        description: 'As a software developer, I developed the VisiTrack web and mobile application, a comprehensive visitor management system designed to manage visitor check-ins and bookings at various locations. This application not only provides a seamless experience for both hosts and visitors but also ensures efficient tracking and management of visits. Users can easily schedule visits, send notifications to hosts, and manage visitor details efficiently, enhancing the overall visitor experience and streamlining the check-in process for various venues.',
        animationClass: 'farm-door',
        demoUrl: '#', // TODO: Add your live demo link
        githubUrl: 'https://github.com/thedondev/VisiTrack' // TODO: Add your GitHub repo link
    },
    {
        title: 'CheckMate',
        description: 'In my role as a software developer, I also worked on the CheckMate Mobile Application, a dynamic and innovative solution designed to streamline student class attendance management in universities. Built with Flutter (Dart) for a responsive cross-platform frontend and Node.js for a reliable backend, CheckMate provides a user-friendly and efficient digital solution. It empowers both lecturers and students to manage attendance seamlessly, replacing traditional paper methods with real-time tracking and reporting capabilities.',
        animationClass: 'op-hub',
        demoUrl: '#', // TODO: Add your live demo link
        githubUrl: 'https://github.com/thedondev/CheckMate' // TODO: Add your GitHub repo link
    }
];

const Projects = () => {
    return (
        <>
            <section id="projects" className="main">
                <div className="inner">
                    <header className="major">
                        <h2>PROJECTS</h2>
                    </header>
                    <p>Throughout my career, I have worked on numerous projects that have honed my skills as a software engineer. Here are a few of the notable ones:</p>
                    <div className="projects-container">
                        {projectsData.map((project, index) => (
                            <React.Fragment key={project.title}>
                                <div className={`project-section ${project.animationClass}`}>
                                    <div className="project-content">
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        <div className="project-links" style={{ marginTop: '1em' }}>
                                            <a href={project.demoUrl} className="btn btn-outline-light mt-2" target="_blank" rel="noopener noreferrer">Live Demo</a>
                                            <a href={project.githubUrl} className="btn btn-outline-light mt-2" style={{ marginLeft: '10px' }} target="_blank" rel="noopener noreferrer">GitHub</a>
                                        </div>
                                    </div>
                                </div>
                                {index < projectsData.length - 1 && <div className="vertical-line"></div>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>
            <NavigationArrows prev="/experience" next="/contact" />
        </>
    );
};

export default Projects;
