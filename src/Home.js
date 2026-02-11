import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavigationArrows from './NavigationArrows';
import cv from './assets/Donald_Mwanga_Makori__CV.pdf';

const texts = ["Software Engineer", "Full-Stack Developer", "IT Support Specialist", "Social Entrepreneur"];

const Home = () => {
    const [animatedText, setAnimatedText] = useState('');

    useEffect(() => {
        let count = 0;
        let index = 0;
        let currentText = "";
        let letter = "";
        let typingTimeout;
        let nextTextTimeout;

        function type() {
            if (count === texts.length) {
                count = 0;
            }
            currentText = texts[count];
            letter = currentText.slice(0, ++index);

            setAnimatedText(letter);

            if (letter.length === currentText.length) {
                nextTextTimeout = setTimeout(() => {
                    count++;
                    index = 0;
                    type();
                }, 2000); // Wait 2s before starting next word
            } else {
                typingTimeout = setTimeout(type, 150);
            }
        }

        type();

        // Cleanup function to clear timeouts when the component unmounts
        return () => {
            clearTimeout(typingTimeout);
            clearTimeout(nextTextTimeout);
        };
    }, []);

    return (
        <>
            <section id="banner" className="active">
                <div className="inner">
                    <h1>Welcome to my Creative Portfolio</h1>
                    <p id="animated-text">{animatedText}</p>
                    <div className="cta-buttons" style={{ marginTop: '2em', display: 'flex', justifyContent: 'center', gap: '1em' }}>
                        <a href={cv} className="btn btn-lg" style={{ backgroundColor: '#28a745', color: '#fff', border: 'none' }} download aria-label="Download CV">
                            <i className="fas fa-download mr-2"></i>Download CV
                        </a>
                        <Link to="/contact" className="btn btn-lg" style={{ backgroundColor: '#007bff', color: '#fff', border: 'none' }} aria-label="Contact Me">
                            <i className="fas fa-envelope mr-2"></i>Contact Me
                        </Link>
                    </div>
                </div>
            </section>
            <NavigationArrows prev="/contact" next="/intro" />
        </>
    );
};

export default Home;