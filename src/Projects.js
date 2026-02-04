import React, { useState, useEffect } from 'react';
import NavigationArrows from './NavigationArrows';

// Import images
import libricoIcon from './assets/Librico_desktop_application_Icon.jpg';
import libricoApp3 from './assets/Librico_desktop_appli_3.jpg';
import visiTrack1 from './assets/VisiTrack_1.jpg';
import visiTrack2 from './assets/VisiTrack_2.jpg';
import checkMate1 from './assets/Mobile_App_Icon_Image_for_2.jpg';
import checkMate2 from './assets/Mobile_App_Icon_Image_for_3.jpg';

const projectsData = [
    {
        title: 'VisiTrack',
        description: 'As a software developer, I developed the VisiTrack web and mobile application, a comprehensive visitor management system designed to manage visitor check-ins and bookings at various locations. This application not only provides a seamless experience for both hosts and visitors but also ensures efficient tracking and management of visits. Users can easily schedule visits, send notifications to hosts, and manage visitor details efficiently, enhancing the overall visitor experience and streamlining the check-in process for various venues.',
        imageUrls: [visiTrack1, visiTrack2],
        demoUrl: '#', // TODO: Add your live demo link
        videoUrl: '', // TODO: Add YouTube Video ID (e.g. 'dQw4w9WgXcQ')
        githubUrl: 'https://github.com/thedondev/VisiTrack' // TODO: Add your GitHub repo link
    },
    {
        title: 'CheckMate',
        description: 'In my role as a software developer, I also worked on the CheckMate Mobile Application, a dynamic and innovative solution designed to streamline student class attendance management in universities. Built with Flutter (Dart) for a responsive cross-platform frontend and Node.js for a reliable backend, CheckMate provides a user-friendly and efficient digital solution. It empowers both lecturers and students to manage attendance seamlessly, replacing traditional paper methods with real-time tracking and reporting capabilities.',
        imageUrls: [checkMate1, checkMate2],
        demoUrl: '#', // TODO: Add your live demo link
        videoUrl: '', // TODO: Add YouTube Video ID
        githubUrl: 'https://github.com/thedondev/CheckMate' // TODO: Add your GitHub repo link
    },
    {
        title: 'Librico',
        description: 'As a software developer, I engineered Librico, a standalone desktop application designed to modernize library management in high schools. Built using Electron and React, this solution effectively replaces manual, paper-based systems with a robust digital platform. It features secure librarian authentication, comprehensive book inventory management, and automated due date tracking. Librico enhances operational efficiency by ensuring accurate record-keeping and providing a seamless borrowing experience for students and staff alike.',
        imageUrls: [libricoIcon, libricoApp3], // Updated with new images
        demoUrl: '#', // TODO: Add your live demo link
        videoUrl: '', // TODO: Add YouTube Video ID
        githubUrl: '#' // TODO: Add your GitHub repo link
    }
];

const ProjectCard = ({ project, onOpenModal }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        // Only run slideshow if there's more than one image
        if (project.imageUrls && project.imageUrls.length > 1) {
            const intervalId = setInterval(() => {
                setCurrentImageIndex(prevIndex => (prevIndex + 1) % project.imageUrls.length);
            }, 5000); // Change image every 5 seconds

            return () => clearInterval(intervalId);
        }
    }, [project.imageUrls]);

    const currentImageUrl = project.imageUrls[currentImageIndex];

    const backgroundStyle = {
        backgroundImage: `url(${currentImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1.5s ease-in-out',
    };

    return (
        <div
            className="project-section"
            style={currentImageUrl ? backgroundStyle : { backgroundColor: '#333' }}
        >
            <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links" style={{ marginTop: '1em' }}>
                    <a 
                        href={project.demoUrl} 
                        className="btn btn-outline-light mt-2" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => {
                            if (project.videoUrl) {
                                e.preventDefault();
                                onOpenModal(project);
                            }
                        }}
                    >
                        <i className="fas fa-external-link-alt mr-2"></i> Live Demo
                    </a>
                    <a href={project.githubUrl} className="btn btn-outline-light mt-2" style={{ marginLeft: '10px' }} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github mr-2"></i> GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedProject, setSelectedProject] = useState(null);
    const projectsPerPage = 2; // Show 2 projects per view

    // Create pages of projects
    const projectPages = [];
    for (let i = 0; i < projectsData.length; i += projectsPerPage) {
        projectPages.push(projectsData.slice(i, i + projectsPerPage));
    }
    const numSlides = projectPages.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % numSlides);
        }, 8000); // Move to the next slide every 8 seconds

        return () => clearInterval(interval);
    }, [currentIndex, numSlides]); // Reset interval on manual navigation or when project count changes

    const handlePrev = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + numSlides) % numSlides);
    };

    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % numSlides);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <>
            <section id="projects" className="main">
                <div className="inner">
                    <header className="major">
                        <h2>PROJECTS</h2>
                    </header>
                    <p>Throughout my career, I have worked on numerous projects that have honed my skills as a software engineer. Here are a few of the notable ones:</p>
                    <div className="projects-container">
                        <div className="projects-slider" style={{
                            width: `${numSlides * 100}%`,
                            transform: `translateX(-${currentIndex * (100 / numSlides)}%)`
                        }}>
                            {projectPages.map((page, pageIndex) => (
                                <div className="project-slide-page" key={pageIndex}>
                                    {page.map((project) => (
                                        <ProjectCard project={project} key={project.title} onOpenModal={setSelectedProject} />
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div className="slider-nav">
                            <button onClick={handlePrev} className="slider-arrow prev-arrow" aria-label="Previous project">‹</button>
                            <button onClick={handleNext} className="slider-arrow next-arrow" aria-label="Next project">›</button>
                        </div>
                        <div className="slider-pagination">
                            {projectPages.map((_, index) => (
                                <button
                                    key={index}
                                    className={`pagination-dot ${currentIndex === index ? 'active' : ''}`}
                                    onClick={() => goToSlide(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Video Modal */}
                {selectedProject && (
                    <div style={{
                        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 1000,
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }} onClick={() => setSelectedProject(null)}>
                        <div style={{
                            backgroundColor: '#222', padding: '20px', borderRadius: '8px',
                            maxWidth: '800px', width: '90%', position: 'relative', border: '1px solid #444'
                        }} onClick={e => e.stopPropagation()}>
                            <button style={{
                                position: 'absolute', top: '10px', right: '10px',
                                background: 'none', border: 'none', color: '#fff', fontSize: '24px', cursor: 'pointer'
                            }} onClick={() => setSelectedProject(null)}>×</button>
                            <h3 style={{ color: '#fff', marginBottom: '15px' }}>{selectedProject.title} Demo</h3>
                            {selectedProject.videoUrl ? (
                                <div className="video-responsive" style={{ overflow: 'hidden', paddingBottom: '56.25%', position: 'relative', height: 0 }}>
                                    <iframe
                                        src={`https://www.youtube.com/embed/${selectedProject.videoUrl}`}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        style={{ left: 0, top: 0, height: '100%', width: '100%', position: 'absolute' }}
                                    />
                                </div>
                            ) : (
                                <p style={{ color: '#fff' }}>Demo video coming soon.</p>
                            )}
                        </div>
                    </div>
                )}
            </section>
            <NavigationArrows prev="/experience" next="/contact" />
        </>
    );
};

export default Projects;
