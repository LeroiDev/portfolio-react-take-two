import React, { Fragment } from 'react'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'

const ContactPage = ({isOpen,toggle}) => {
  return (
  <Fragment>
    <Navbar toggle={toggle}/>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Contact/>
    <Footer/>
  </Fragment>
  )
}

export default ContactPage
