import "./IconButton.css"

const IconButton = ({ iconLink, onClick }) => {
    return (
        <button className='mr-icon-button' onClick={onClick}>
            <img className='mr-icon' src={iconLink} />
        </button>
    );
};
export default IconButton;

