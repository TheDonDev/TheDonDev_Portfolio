import React from 'react';
import BackgroundSlideshow from './BackgroundSlideshow';
import NavigationArrows from './NavigationArrows';
import profilePic from './assets/profile.jpg'; // Add your profile picture to src/assets
import nai from './assets/nai.webp';
import nai3 from './assets/nai3.webp';

const backgroundImages = [nai, nai3];

const Intro = () => {
    return (
        <>
            <section id="intro" className="main">
                <BackgroundSlideshow images={backgroundImages} interval={5000} />
                <div className="inner">
                    <header className="major">
                        <h2>INTRODUCTION</h2>
                    </header>
                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '2em' }}>
                        <img src={profilePic} alt="Donald Mwanga Makori" style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover' }} />
                        <p>
                            I am a Software Developer/Engineer with experience in creating innovative solutions. My work involves developing applications that are efficient, scalable, and user-friendly. My expertise lies in full-stack development, and I enjoy taking on new challenges and learning new technologies. From the vibrant streets of Kenya to the intricate world of code, I navigate with a unique perspective. Technology is my canvas, and I paint with the precision of a software engineer. Explore my portfolio and discover how I blend my diverse interests into exceptional code.
                        </p>
                    </div>
                </div>
            </section>
            <NavigationArrows prev="/" next="/about" />
        </>
    );
};

export default Intro;