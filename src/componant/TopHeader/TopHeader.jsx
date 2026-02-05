import { Link } from 'react-router-dom'
import './TopHeader.css'
const TopHeader = () => {
  return (
    <section className='Ali-top-header'>
        <div className='Ali-Discover'>
            <p>✨Discover Your Dream Property with Estatein</p>
            {/*<a href="/Properties">learn more</a>*/}
            <Link to="/Properties" className="Alianchor">learn more</Link>
        </div>
        <div className='X-icon'>
            <img src="./assets/icons/X-icon-lg.svg" alt="X-icon" />
        </div>
    </section>
    
  )
}
export default TopHeader
