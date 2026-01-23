import React from 'react';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="inner">
                <p>&copy;{new Date().getFullYear()} Donald Mwanga Makori. All rights reserved. Built with ❤️</p>
            </div>
        </footer>
    );
};

export default Footer;