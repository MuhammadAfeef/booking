import './navbar.css';
import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">iBookdy</span>
        <div className="navItems">
            <button className='Buttons navButton'>Register</button>
            <button className='Buttons navButton'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
