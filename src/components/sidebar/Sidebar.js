import React from 'react'
import './sidebar.css'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkS} from 'react-scroll' 
import {Link as LinkR} from 'react-router-dom'

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
         <LinkS onClick={toggle} className='sidebar-link link'to="about">About</LinkS>
         <LinkS onClick={toggle} className='sidebar-link link'to="projects">Projects</LinkS>
         <LinkS onClick={toggle} className='sidebar-link link'to="social">Social Media</LinkS>
       </ul>
       <div className="sidebar-btn-wrapper">
         <LinkR to="/contact">Contact Me</LinkR>
       </div>
     </div>
  </div> 
    );
    
  }
    

export default Sidebar
