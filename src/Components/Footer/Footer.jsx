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
                    <li style={{color:'#65abf6'}}> | </li>
                    <li><Link to="/About_us">About</Link></li>

                    
                </ul>
            </div>
            
        </div>
        <div className="footer-info">
            <p className='copyright'>© 2024 <a href='https://www.isarchimede.edu.it/' target='_blank'>ITIS Archimede</a> 
            Indirizzo: <a href='https://maps.app.goo.gl/YDJhgas5nDtKG2rs5' target='_blank'>Via Greggia, 52, 24047 Treviglio BG</a></p> <br></br>
            </div>
            
            <div className="footer-info2">
                <p className='email'>Email: <a href="mailto:ferri.davide.stu@isarchimede.it" > ferri.davide.stu@isarchimede.it </a> <a href="mailto:barboni.luca.stu@isarchimede.it" > barboni.luca.stu@isarchimede.it </a> <a href="mailto:carlino.mattia.stu@isarchimede.it" > carlino.mattia.stu@isarchimede.it </a> 
                </p>
            </div>
    </div>
</footer>

  )
}

export default Footer;