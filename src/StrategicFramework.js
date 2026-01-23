import React from 'react';
import NavigationArrows from './NavigationArrows';

const StrategicFramework = () => {
    return (
        <>
            <section id="strategic-framework" className="main">
                <div className="inner">
                    <header className="major">
                        <h2>STRATEGIC FRAMEWORK</h2>
                    </header>
                    <p>My strategic framework is built around several key principles: innovation, collaboration, and continuous improvement. I believe in leveraging technology to create solutions that not only meet the needs of today but also anticipate the challenges of tomorrow. By fostering a culture of teamwork and ongoing learning, I aim to drive progress and achieve excellence in every project I undertake.</p>
                    <div className="vision-mission">
                        <h3>VISION</h3>
                        <p>I envision a world where software empowers progress, simplifies experiences, and unlocks new possibilities. Through elegant code and innovative solutions, I strive to be at the forefront of this evolution, crafting software that not only functions flawlessly but also inspires and uplifts.</p>
                        <hr />
                        <h3>MISSION</h3>
                        <ul>
                            <li>Craft innovative and user-centric software solutions.</li>
                            <li>Deliver high-performing and scalable applications.</li>
                            <li>Continuously learn and adopt cutting-edge technologies.</li>
                            <li>Collaborate effectively to bring complex projects to life.</li>
                            <li>Approach challenges with a problem-solving mindset.</li>
                        </ul>
                    </div>
                </div>
            </section>
            <NavigationArrows prev="/about" next="/experience" />
        </>
    );
};

export default StrategicFramework;