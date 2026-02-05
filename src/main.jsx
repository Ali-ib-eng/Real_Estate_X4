import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './colors/style.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './typography_system.css';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/Real_Estate_X4/'>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
