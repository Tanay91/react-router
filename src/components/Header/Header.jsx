import React from 'react'
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <h2>Navbar</h2>
      <nav>
        <Link to="/">Home</Link>
        <NavLink to="/users">Users</NavLink>
        <Link to="/about">About Us</Link>
        <NavLink to="/posts">Posts</NavLink>
       <Link to="/contact">Contact Us</Link>
       

      </nav>
    </div>
  )
}

export default Header
