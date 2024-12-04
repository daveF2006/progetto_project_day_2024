import React from 'react'
import {Link} from 'react-router-dom'
import { MdAccountCircle } from "react-icons/md";
import '../Header/Header.css'
import Logo from '../Header/prova logo.png'

export const Header = () => {
  return (
    <header id='Header'>
      <div className='wrapper'>
        <nav className='nav-bar'>
          <ul>
            <li> <a href='/'><img src={Logo} alt="logo-app" className='logo-app'  /></a></li>
            <li><Link to="/"><h5>Home</h5></Link></li>
            <li><Link to="/About_us"><h5>About</h5></Link></li>
            <li><Link to= "/Homepage Account"><h5 className='sign-up-title'>Sign up <MdAccountCircle /> </h5> </Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
