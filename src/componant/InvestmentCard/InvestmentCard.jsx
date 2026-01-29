// import needed files
import React from 'react';
import './InvestmentCard.css';
import "../../typography_system.css";
import DoubleCircledIcon from '../DoubleCirceldIcon/DoubleCirceldIcon';

const InvestmentCard = ({
    cardIcon,
    cardTitle,
    cardBrief }) => {
    return (
        // card title: icon + title
        <div className='mr-investment-card'>
            <span className='mr-investment-card-header'>
                {/* icon */}
                <DoubleCircledIcon iconLink={cardIcon} />
                {/* title */}
                <h5 className='subheading-2'>{cardTitle}</h5>
            </span>
            {/* brief */}
            <p className='body'>{cardBrief}</p>
        </div >
    );
};

export default InvestmentCard;