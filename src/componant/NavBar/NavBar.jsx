import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
        <h1>img logo</h1>
      <ul>
        <li><Link to="/" >home</Link></li>
        <li><Link to="/about">about</Link> </li>
        <li><Link to="/properties">properties</Link> </li>
        <li><Link to="/services">services</Link> </li>
        <li><Link to="/contact">contact</Link> </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  )
}

export default NavBar
