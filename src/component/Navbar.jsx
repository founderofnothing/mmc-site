import React from 'react'
import logo from '../assets/marymathalogo.svg';

import './Navbar.css'

const Navbar = () => {
  return (
   

<div className="navcontainer">
          <div className="navbar">
          <div className="lhsn">
        <img className='logo' src={logo} alt="" />
          <h1 className='navtitle'>
            mmc
          </h1>
          </div>
          <div className="rhs">
            <div className="hammenu">

            <svg  className="menuicon" xmlns="http://www.w3.org/2000/svg"    viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 12H10m10-7H4m16 14H4" color="currentColor"></path></svg>


            

            </div>
          </div>

          </div>

        </div>
      
  )
}

export default Navbar
