import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from "../images/logo.svg"
import './Navbar.css'


const Navbar = () => {
  return (
    <div className='container'>
        <ul>
            <div className='nav1'>
            <NavLink to="/">
                <img src={Logo} alt="logo" />
            </NavLink>
            </div>
            <div className='nav2'>
            <li><NavLink to="features">Features</NavLink></li>
            <li><NavLink to="company">Company</NavLink></li>
            <li><NavLink to="carees">Carees</NavLink></li>
            <li><NavLink to="about">About</NavLink></li>
            </div>
            <div className='nav3'>
            <li><NavLink to="login">Login</NavLink></li>
            <li><NavLink  to="register">Register</NavLink></li>
            </div>
        </ul>
    </div>
  )
}

export default Navbar