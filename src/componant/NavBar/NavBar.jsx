import { Link } from 'react-router-dom'
import './NavBar.css'
import { useState } from 'react';

const NavBar = ({items=[],btn,className}) => {
  const [show,setshow] = useState(false);
  return (
    <nav className={`ALi-nav ${show ? 'nav-open' : ''}`}>
      <div className="ALi-logo">
        <img src="./assets/icons/estatelogo.png" alt="navicon" className="Ali-img"/>
        <img src="./assets/icons/estatelogo-sm.png" alt="estatelogo-sm" className="Ali-imglogoformobile"/>
      </div>

      <ul className={`ALi-ul ${show ? 'open' : ''}`}>
        {items.map((item,index)=>{
          return(
            <li key={index}><Link to={item.href} className={item.className || ""}>{item.content}</Link></li>
          )
        })}
      </ul>

      <div className={`ALi-contacticon ${show ? 'open' : ''}`}>
        <button className={`ALi-maincontacticon ${className || ""}`}><Link to="/contact">{btn}</Link></button>
      </div>

      <button onClick={() => setshow(prev => !prev)} className="Ali-showicon" aria-expanded={show}>
        <img src="./assets/icons/barsicon.png" alt="barsicon" />
      </button>
    </nav>
  )
}

export default NavBar




