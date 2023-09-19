import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <h2>Navbar</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
       <Link to="/contact">Contact Us</Link>
       <Link to="/users">Our Users</Link>
      </nav>
    </div>
  )
}

export default Header