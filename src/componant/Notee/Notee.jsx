import React from 'react';
import './Notee.css';
import '../../TypographySystem.css';

const Notee = ({ NoteLabel }) => {
    return (
        <span className="notee">
            <p className='body'>{noteeLabel}</p>
        </span>
    );
};

export default Notee;