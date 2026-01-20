import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Properties from "./pages/Properties"
import Services from "./pages/Services"
import ContactUs from "./pages/ContactUs"
import TopHeader from "./componant/TopHeader/TopHeader"
import NavBar from "./componant/NavBar/NavBar"

function App(){
  const navItems=[
    {
      content:"Home",
      href:"/"
    },
    {
      content:"About Us",
      href:"/about"
    },
    {
      content:"Properties",
      href:"/properties"
    },
    {
      content:"Services",
      href:"/services"
    }
    /*{
      content:"Contact Us",
      href:"/contact"
    }*/
    
  ]
  return (
    <>
    <TopHeader/>
    <NavBar
    
    items={navItems}
    btn={"Contact Us"}
    
    />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/properties" element={<Properties/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
      </>
    
  )
}

export default App
