import React from "react";
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS , animateScroll as scroll} from 'react-scroll';
import Logo from '../../images/textlogo.gif';
import './footerStyle.css';

const Footer = () => {
  const toggleToTop = ()=>{
    scroll.scrollToTop();
  }
  return (
    <div className="footer">
      <div className="container">
        <div className="flex-rows">
          <div className="footer-pages">
            <li>
              <LinkS className="links" to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-20}>
                <i className="fab fa-react"></i> Projects
              </LinkS>
            </li>
            <li>
              <LinkS className="links" to="about" smooth={true} duration={500} spy={true} exact='true' offset={-20} >
                <i className="fas fa-child"></i> About
              </LinkS>
            </li>
            <li>
              <LinkS className="links" to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-20} >
                <i className="fas fa-address-card"></i> Contact
              </LinkS>
            </li>
          </div>
          <div className="footer-items">
          <LinkR to="/" onClick={toggleToTop} className='link'>
         <img style={{width:"120px"}} src={Logo} alt="Leroi"/>
       </LinkR>
     
          </div>

          <div className="footer-logos">
            <a href="https://github.com/LeroiDev">
              <i className="fab fa-github fa-2x"> </i> GitHub
            </a>
            <a href="https://www.instagram.com/l_eroi/">
              <i className="fab fa-instagram fa-2x"> </i> Instagram
            </a>
            <a href="https://www.facebook.com/profile.php?id=1164826629">
              <i className="fab fa-facebook fa-2x"> </i> FaceBook
            </a>
          </div>
        </div>
        </div>
        <div className="copy">
        <p>
         Copyright &copy; 2020
       </p>
       </div>
      </div>
  );
};
export default Footer;
