import React from 'react'
import './navbar.css'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS, animateScroll as scroll} from 'react-scroll'
import {FaBars} from 'react-icons/fa'
import Logo from '../../images/textlogo.gif'


const Navbar = ({toggle}) => {
  const toggleHome = ()=>{
    scroll.scrollToTop();
  }



  return (
    <>
   <nav>
     <div className="navbar-container">
       <LinkR to="/" onClick={toggleHome} className='navbar-logo link' >
         <img style={{width:"120px"}} src={Logo} alt="Leroi"/>
       </LinkR>
       <div className="mobile-icon">
         <FaBars  onClick={toggle}/>
       </div>
       <ul className="navbar-menu">
         <li className="navbar-item">
           <LinkS className='link'to="projects" smooth={true} duration={700} spy={true} exact='true' offset={-30}>Projects</LinkS>
         </li>
         <li className="navbar-item">
           <LinkS className='link'to="about" smooth={true} duration={700} spy={true} exact='true' offset={-30} >About</LinkS>
         </li>
       </ul>
      <div className='navbar-btn'>
        <LinkS to="contact" smooth={true} duration={700} spy={true} exact='true' offset={-30} >
          Contact Me
        </LinkS>
        </div>        
     </div>
   </nav>
   </>
  )
}

export default Navbar
