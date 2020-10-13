import React from 'react'
import './navbar.css'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
import {FaBars} from 'react-icons/fa'
import Logo from '../../images/textlogo.gif'


const Navbar = ({toggle}) => {




  return (
    <>
   <nav>
     <div className="navbar-container">
       <LinkR to="/" className='navbar-logo link' >
         <img style={{width:"120px"}} src={Logo} alt="Leroi"/>
       </LinkR>
       <div className="mobile-icon">
         <FaBars  onClick={toggle}/>
       </div>
       <ul className="navbar-menu">
         <li className="navbar-item">
           <LinkS className='link'to="projects">Projects</LinkS>
         </li>
         <li className="navbar-item">
           <LinkS className='link'to="about">About</LinkS>
         </li>
         <li className="navbar-item">
           <LinkS className='link'to="/contact">Social Media</LinkS>
         </li>
       </ul>
      <div className='navbar-btn'>
        <LinkR to="/contact">
          Contact Me
        </LinkR>
        </div>        
     </div>
   </nav>
   </>
  )
}

export default Navbar
