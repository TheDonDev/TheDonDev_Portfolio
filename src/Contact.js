import React, { useState, useEffect, useRef } from 'react';
import NavigationArrows from './NavigationArrows';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
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
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Replace these strings with your actual EmailJS credentials if .env is not working
        const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
        const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID  || 'YOUR_TEMPLATE_ID';
        const publicKey = process.env.REACT_APP_EMAILJS_USER_ID || 'YOUR_PUBLIC_KEY';

        if (
            !serviceID || serviceID.includes('YOUR_SERVICE_ID') ||
            !templateID || templateID.includes('YOUR_TEMPLATE_ID') ||
            !publicKey || publicKey.includes('YOUR_PUBLIC_KEY')
        ) {
            const errorMessage = 'Email service is not configured. Please check your .env file for placeholder values.';
            setStatus(errorMessage);
            setIsSubmitting(false);
            console.error('EmailJS Error: Credentials in .env file are missing or are still set to placeholder values.');
            return;
        }

        // Note: The 4th argument is the Public Key (formerly User ID)
        emailjs.sendForm(serviceID, templateID, e.target, publicKey)
            .then((result) => {
                console.log('EmailJS Success:', result.text);
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus(''), 5000);
            }, (error) => {
                console.error('EmailJS Error:', error.text);
                setStatus(`Error: ${error.text}. Please try again.`);
            })
            .finally(() => {
                setIsSubmitting(false);
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
                        <li>
                            <a href="mailto:donaldmwanga33@gmail.com">
                                <i className="fas fa-envelope"></i> donaldmwanga33@gmail.com
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/donald-mwanga-4bb5abba" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i> LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/thedondev" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i> GitHub
                            </a>
                        </li>
                    </ul>

                    <div className="contact-form">
                        <h3>Send a Message</h3>
                        <form id="contactForm" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" className="form-control" id="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" id="message" name="message" rows="5" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <><span className="spinner"></span>Sending...</>
                                ) : (
                                    'Send Message'
                                )}
                            </button>
                            {status && !isSubmitting && <p className={`form-status ${status.startsWith('Error') ? 'error' : ''}`}>{status}</p>}
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