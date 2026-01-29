import React from 'react';
import './Modal.css';
import '../../typography_system.css';
import SecondaryButton from '../Button/SecondaryButton.jsx';

const Modal = ({ modalTitle, modalBrief }) => {
    return (
        <div className='mr-modal'>
            <h5 className='subheading-2'>{modalTitle}</h5>
            <p className='body'>{modalBrief}</p>
            <SecondaryButton buttonLabel="Learn More" />
        </div>
    );
};

export default Modal;