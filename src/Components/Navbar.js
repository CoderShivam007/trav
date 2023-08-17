import React, { useState } from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
export default function Navbar() {

  const [active,setActive] = useState('');
  const [activeheader,setActiveHeader] = useState('');

  function changebg(){
    var scrollvalue = window.scrollY;

    
    if(scrollvalue > 115)
    {
     setActiveHeader('bgcolor');
    }

    else
    {
      setActiveHeader('');
    }
    
  }

  window.addEventListener('scroll',changebg);

  const shownav = ()=>{
setActive('activenavbar');

  }

  const hidenav = ()=>{
    setActive('');
      }

  return (
    <div className='navbar-section'>
        <header className={`header flex ${activeheader}`} id='header'>
            <div className='logodiv'>
                <a href='#' className='flex'>
                <h1>  <img src='logo.png' className=' image'/>    <span>Travello</span></h1>
                </a>
                
            </div>

          <div className={`navbar ${active}`}>
            <ul className='navlists flex'>
              <li className='navitem'>
                <Link to='/' className='navlink'>Home</Link>
              </li>

              <li className='navitem'>
                <Link to='/about' className='navlink'>About</Link>
              </li>

              <li className='navitem'>
                <Link to='/service' className='navlink'>Services</Link>
              </li>

              <li className='navitem'>
                <Link to='/package' className='navlink'>Packages</Link>
              </li>

              <li className='navitem'>
                <Link to='/blog' className='navlink'>Blog</Link>
              </li>

              <li className='navitem'>
                <Link to='/contact' className='navlink'>Contact</Link>
              </li>

              <li className='navitem'>
                <Link to='/login' className='navlink'>Login</Link>
              </li>

              <button className='btn'>
          <a href='#'>BOOK NOW</a>
          </button >
            </ul>

            <div className='closenavbar' onClick={hidenav}>
              <i className='fa fa-times-circle icon'></i>
            </div>
        
            
          </div>

          <div className='togglenavbar' onClick={shownav}>
             <img src='menu.png' className='icon image'/ >
            </div>


        </header>

       
    </div>
  )
}
