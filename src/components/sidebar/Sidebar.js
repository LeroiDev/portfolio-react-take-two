import React from 'react'
import './sidebar.css'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkS} from 'react-scroll' 

const Sidebar = ({isOpen,toggle}) => {

    return(
<div onClick={toggle}  className={
        !isOpen ? 'sidebar-container' : ('sidebar-container open')
      }> 
    <div  className="icon-container">
      <FaTimes 
       className="sidebar-icon-close"/>
    </div>
    <div className="sidebar-wrapper">
       <ul className="sidebar-menu">
         <LinkS onClick={toggle} className='sidebar-link link'to="about" smooth={true} duration={500} spy={true} exact='true' offset={-70} >About</LinkS>
         <LinkS onClick={toggle} className='sidebar-link link'to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-20} >Projects</LinkS>
       </ul>
       <div className="sidebar-btn-wrapper">
       <LinkS to="contact" onClick={toggle} smooth={true} duration={700} spy={true} exact='true' offset={-30} >
          Contact Me
        </LinkS>
       </div>
     </div>
  </div> 
    );
    
  }
    

export default Sidebar
