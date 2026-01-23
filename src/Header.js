import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isNavActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!isNavActive);
    };

    const closeNav = () => {
        setNavActive(false);
    };

    return (
        <header id="header">
            <div className="inner">
                <NavLink to="/" className="logo" onClick={closeNav}>Donald Mwanga Makori</NavLink>
                <div className="hamburger" onClick={toggleNav}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <nav id="nav" className={isNavActive ? 'active' : ''}>
                    <NavLink to="/" onClick={closeNav}>Home</NavLink>
                    <NavLink to="/intro" onClick={closeNav}>Intro</NavLink>
                    <NavLink to="/about" onClick={closeNav}>About</NavLink>
                    <NavLink to="/strategic-framework" onClick={closeNav}>Strategic Framework</NavLink>
                    <NavLink to="/experience" onClick={closeNav}>Experience</NavLink>
                    <NavLink to="/projects" onClick={closeNav}>Projects</NavLink>
                    <NavLink to="/contact" onClick={closeNav}>Contact</NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;