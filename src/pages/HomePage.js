import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Navbar from '../components/navbar/Navbar'
import HeroSection from '../components/hero/HeroSection'

const HomePage = ({isOpen,toggle}) => {
  return (
      <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection/>
      </>      
  )
}

export default HomePage;
