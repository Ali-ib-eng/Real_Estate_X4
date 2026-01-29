import React from 'react';
import "./IconButton.css"

const IconButton = ({ iconLink, onClick }) => {
    return (
        <button className='mr-icon-button' onClick={onClick}>
            <img className='mr-icon' src={iconLink} />
        </button>
    );
};
export default IconButton;


// import React from 'react';
// import "./IconButton.css"

// const IconButton = ({ iconLink}) => {
//     return (
//         <button className='mr-icon-button'>
//             <img className='mr-icon' src={iconLink}>
//             </img>
//         </button>
//     );
// };

// export default IconButton;