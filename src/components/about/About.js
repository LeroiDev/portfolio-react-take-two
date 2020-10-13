import React from 'react'
import './aboutStyle.css'
import aboutImage from '../../images/about-image.jpg'
import aboutBg from '../../images/about-bg.jpg'

const About = () => {
  return (
    <section id="about">
        <div className="about-container">
          <div className="about-background">
            <img src={aboutBg} alt=""/>
        </div>
        <div className="container">
        <h2 className='about-title'>
          A LITTLE INFO ON LITTLE ME
          </h2>
        <div className="about-context">
        <div className="image">
      <img src={aboutImage} alt=""/>
      </div>
          <div className="content">
            <h4>Self Improvement</h4>
            <p>Never will I stop wanting to learn and imporove myself in this industry, constantly evolving. I love this about developing software</p>
            <h4>Commitment</h4>
            <p>Hard work and keeping your word over everything else. Clients and a vision can be a beacon to guide you.</p>
            <h4>Over Deliver</h4>
            <p>I deliver more than clients and a team expects. Doing so I find gives me sollace and value in life. To deliver good work is an amazing reward life has to offer. It makes you feel great and valued.</p>
            <h4>Being transparent</h4>
            <p>Openness with teams and clients to provide the best solutions promptly</p>
          </div>
        </div>
        </div>
        </div>
    </section>
  )
}

export default About
