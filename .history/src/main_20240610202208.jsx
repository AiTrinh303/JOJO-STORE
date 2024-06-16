import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "./Context/ThemeContext";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <p><App /></p>
  </React.StrictMode>,
)
