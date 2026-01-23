import React from 'react';
import { Link } from 'react-router-dom';

const NavigationArrows = ({ prev, next }) => {
    return (
        <div className="navigation-arrows">
            {prev && <Link to={prev} className="arrow left-arrow">&#9664;</Link>}
            {next && <Link to={next} className="arrow right-arrow">&#9654;</Link>}
        </div>
    );
};

export default NavigationArrows;