import React from 'react';
import './Topic.css';
import "../../typography_system.css";

const Topic = ({ topicLabel, topicIcon }) => {
    return (
        <span className='mr-topic'>
            <img src={topicIcon} className='mr-topic-icon'></img>
            <span className='button'>{topicLabel}</span>
        </span>
    );
};

export default Topic;