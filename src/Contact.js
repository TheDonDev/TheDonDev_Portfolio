import React, { useState, useEffect, useRef } from 'react';
import NavigationArrows from './NavigationArrows';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');
    const iframeRef = useRef(null);

    useEffect(() => {
        // Lazy-load the iframe
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                const iframe = iframeRef.current;
                if (iframe && iframe.dataset.src) {
                    iframe.src = iframe.dataset.src;
                    observer.unobserve(iframe);
                }
            }
        }, { rootMargin: '200px' });

        if (iframeRef.current) {
            observer.observe(iframeRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({ ...prevState, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Sending...');

        const backendUrl = process.env.REACT_APP_BACKEND_URL || 'https://thedondev-github-io.onrender.com/submit';

        fetch(backendUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (!response.ok) throw new Error(`Server Error: ${response.status}`);
            return response.json();
        })
        .then(() => {
            setStatus('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus(''), 5000);
        })
        .catch((error) => {
            console.error('Error:', error);
            setStatus(`Error: ${error.message}. Please try again.`);
        });
    };

    return (
        <>
            <section id="contact" className="main">
                <div className="inner">
                    <header className="major">
                        <h2>CONTACT ME</h2>
                    </header>
                    <p>If you have any questions or would like to discuss a potential project, feel free to reach out to me.</p>
                    <ul className="contact-info">
                        <li><i className="fas fa-envelope"></i><strong>Email:</strong> <a href="mailto:donaldmwanga33@gmail.com">donaldmwanga33@gmail.com</a></li>
                        <li><i className="fab fa-linkedin"></i><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/donald-mwanga-4bb5abba" target="_blank" rel="noopener noreferrer">Donald Mwanga Makori</a></li>
                        <li><i className="fab fa-github"></i><strong>GitHub:</strong> <a href="https://github.com/thedondev" target="_blank" rel="noopener noreferrer">thedondev</a></li>
                        {/* ... other social links */}
                    </ul>

                    <div className="contact-form">
                        <form id="contactForm" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" id="message" rows="4" placeholder="Enter your message" value={formData.message} onChange={handleChange} required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            {status && <p style={{ marginTop: '1em' }}>{status}</p>}
                        </form>
                    </div>

                    <div className="map-container">
                        <h3>Find me at Nairobi, Kenya</h3>
                        <iframe
                            ref={iframeRef}
                            title="Map showing Konza Technopolis, Nairobi, Kenya"
                            src="about:blank"
                            data-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.748147018572!2d37.11999811467669!3d-1.7467401987806297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18384b1d96a90f7b%3A0x2d7a3b6f56f5e2df!2sKonza%20Technopolis!5e0!3m2!1sen!2ske!4v1625215843128!5m2!1sen!2ske"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>
            <NavigationArrows prev="/projects" next="/" />
        </>
    );
};

export default Contact;