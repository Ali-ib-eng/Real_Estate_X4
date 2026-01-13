import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Properties from "./pages/Properties"
import Services from "./pages/Services"
import ContactUs from "./pages/ContactUs"
function App() {
  return (
    <>
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
