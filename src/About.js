import React from 'react';
import BackgroundSlideshow from './BackgroundSlideshow';
import NavigationArrows from './NavigationArrows';
import skills from './assets/Skills.webp';
import skills2 from './assets/Skills2.webp';
import skills4 from './assets/Skills4.webp';
import skills5 from './assets/Skills5.webp';
import skills6 from './assets/Skills6.webp';
import bb2 from './assets/BB2.webp';

const backgroundImages = [skills, skills2, skills6, skills4, skills5, bb2];

const About = () => {
    return (
        <>
            <section id="about" className="main">
                <BackgroundSlideshow images={backgroundImages} />
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