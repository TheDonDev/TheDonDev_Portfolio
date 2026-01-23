import React from 'react';
import NavigationArrows from './NavigationArrows';

const About = () => {
    return (
        <>
            <section id="about" className="main">
                <div className="inner">
                    <header className="major">
                        <h2>ABOUT ME</h2>
                    </header>
                    <p>I'm a results-driven Software Developer/Engineer with 10+ years of experience building impactful Web, Mobile, and Desktop applications. I specialize in technologies like Flutter (Dart), Python (Django, Flask), PHP (Laravel), JavaScript (Node.js), and SQL. I’ve improved system efficiency by 50% and maintained 99.5% uptime through scalable, optimized solutions.

I'm also skilled in cloud platforms (AWS, Azure, IBM), API development, GIT, and network security (firewalls, VPNs). Raised in Kenya, I bring values of resilience and curiosity to every challenge. When I’m not coding, I’m probably on the basketball court or vibing to music.</p>

                    <div className="qualities">
                        <span>CREATIVE</span>
                        <span>INNOVATIVE</span>
                        <span>PRODUCTIVE</span>
                        <span>COOPERATIVE</span>
                    </div>
                </div>
            </section>
            <NavigationArrows prev="/intro" next="/strategic-framework" />
        </>
    );
};

export default About;