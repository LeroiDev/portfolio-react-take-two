import React from 'react'
import './hero.css'
import heroVideo from '../../video/heroVideo.mp4'

const HeroSection = () => {
  return (
    <div className='hero-container'>
      <div className="hero-background">
        <video autoPlay loop muted  className="hero-video">

        </video>
      </div>
      
    </div>
  )
}

export default HeroSection
