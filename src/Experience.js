import React from 'react';
import NavigationArrows from './NavigationArrows';

const Experience = () => {
    return (
        <>
            <section id="experience" className="main">
                <div className="inner">
                    <header className="major">
                        <h2>EXPERIENCE</h2>
                    </header>
                    <p>Over the years, I have had the opportunity to work on a variety of projects, each contributing to my growth as a software engineer. Below are some of the notable experiences:</p>
                    <ul>
                        <li><b>Software Developer - Attache at Konza Technopolis Development Authority (May 2024 - August 2024)</b></li>
                        <p>With my experience, I designed, developed, and implemented smart city solutions. I am skilled in Python (Django, Flask), PHP (Laravel), Node.js (Express.js), C, C++, and JavaScript, and have expertise in MySQL and Microsoft SQL Server. I collaborated in cross-functional teams, wrote clean, maintainable code with unit and integration testing, and adapted to evolving project requirements.</p>
                        <li><b>Idea Competition Winner & Team Lead - Venture For Change Kenya (2022)</b></li>
                        <p>In 2022, I led 'Team Spork' from Moi University to win first place in the Venture For Change Kenya idea competition. This social entrepreneurship program, sponsored by Boehringer Ingelheim International, included competitors from the University of Eldoret and Kibabii University and focused on innovating solutions to alleviate waste in rapidly growing urban centers. This experience honed my leadership and problem-solving skills in a competitive environment focused on social impact.</p>
                    </ul>
                    <p>These experiences have equipped me with the skills and knowledge necessary to excel in the field of software development.</p>
                </div>
            </section>
            <NavigationArrows prev="/strategic-framework" next="/projects" />
        </>
    );
};

export default Experience;