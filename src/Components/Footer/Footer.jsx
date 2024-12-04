import React from 'react'
import "../Footer/Footer.css"
import { Link } from 'react-router-dom';
import Logo from '../Header/prova logo.png'


export const Footer = () => {
  return (
    <footer className="footer">
    <div className="container">
        <div className="footer-content">
            <div className="footer-logo">
                <a href='/'><img src={Logo} alt="logo-app" className='logo-app'  /></a>
            </div>
            <div className="footer-links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li> | </li>
                    <li><Link to="/About_us">About</Link></li>
                </ul>
            </div>
            
        </div>
        <div className="footer-info">
            <p className='copyright'>© 2024 ITIS Archimede <br></br>
            Indirizzo: Via Greggia, 52, 24047 Treviglio BG</p>
            <p className='email'>Email: <a href="mailto:ferri.davide.stu@isarchimede.it" > ferri.davide.stu@isarchimede.it </a> <a href="mailto:barboni.luca.stu@isarchimede.it" > barboni.luca.stu@isarchimede.it </a> <a href="mailto:carlino.mattia.stu@isarchimede.it" > carlino.mattia.stu@isarchimede.it </a> 
            </p>
        </div>
    </div>
</footer>

  )
}

export default Footer;