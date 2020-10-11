import React, { useEffect } from 'react'
import './hero.css'
import heroVideo from '../../video/heroVideo.mp4'

const HeroSection = () => {
  useEffect(()=>{
      init();
  //eslint-disable-next-line
  },[])
  class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = "";
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }

    type() {
      // Current index of word
      const current = this.wordIndex % this.words.length;
      // Get full text of current word
      const fullTxt = this.words[current];

      // Check if deleting
      if (this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      // Insert txt into element
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

      // Initial Type Speed
      let typeSpeed = 50;

      if (this.isDeleting) {
        typeSpeed /= 6;
      }

      // If word is complete
      if (!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 850;
      }

      setTimeout(() => this.type(), typeSpeed);
    }
  }

  // Initialize to App
  function init() {
    const txtElement = document.querySelector(".txt-type");
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
  }

  return (
    <div className='hero-container'>
      <div className="hero-background">
        <video autoPlay loop muted src={heroVideo} className="hero-video">
        </video>
      </div>
      {/* type out javascript*/}
      <div className="hero-content">
          <span
            className="txt-type"
            data-wait="3000"
            data-words='["WORKING IN FRONT END USING REACT","GROWING AND LEARNING INTO FULL MERN STACK","USE THE LINKS ABOVE","KINDLY VIEW A FEW OF MY PROJECTS"]'
          ></span>
      </div>
      </div>
  )
}

export default HeroSection
