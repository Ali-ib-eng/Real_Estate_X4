import './SectionHeader.css';
import "../../typography_system.css";
import Stars from '../Stars/Stars.jsx';

const SectionHeader = ({ sectionTitle, sectionBrief }) => {

    return (
        <div className='mr-section-header'>
            <Stars />
            <h2 className='section-title'>{sectionTitle}</h2>
            <p className='body'>{sectionBrief}</p>
        </div>
    );
};

export default SectionHeader;