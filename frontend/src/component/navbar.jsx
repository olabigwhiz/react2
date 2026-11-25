import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './navbar.css'


function Navbar() {
    const navigate = useNavigate()
  return (
    <div className='flex flex-row w-full justify-between'>
      <div>
        <h2>LOGO</h2>
      </div>
      <div className='flex gap-5'>
        <NavLink to='/' >Home</NavLink>
        <NavLink to='/movies'>Movies</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </div>
      <div>
        <button onClick={() => navigate("/signup")}>Sign up</button>
      </div>
    </div>
  )
}

export default Navbar;
