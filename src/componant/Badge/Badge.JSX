import React from 'react';
import './Badge.css';
import '../../TypographySystem.css';

const Badge = ({ badgeLabel }) => {
    return (
        <span className="badgeLabel">
            <span className='button'>{badgeLabel}</span>
        </span>
    );
};

export default Badge;