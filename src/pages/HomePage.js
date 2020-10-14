import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Navbar from '../components/navbar/Navbar'
import HeroSection from '../components/hero/HeroSection'
import ProjectsSection from '../components/projects/ProjectsSection'
import About from '../components/about/About'
import Footer from '../components/footer/Footer';
import Contact from '../components/contact/Contact'

const HomePage = ({isOpen,toggle}) => {
  return (
      <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection/>
      <ProjectsSection/>
      <About/>
      <Contact/>
      <Footer/>
      </>      
  )
}

export default HomePage;
