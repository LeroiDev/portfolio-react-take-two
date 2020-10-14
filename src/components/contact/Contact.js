import React from 'react';
import './contactStyle.css';
import htmlCssLogo from '../../images/htmlcss-logo.png'
import sassLogo from '../../images/sass-logo.png'
import jsLogo from '../../images/js-logo.png'
import reactLogo from '../../images/react-logo.png'
import githubLogo from '../../images/github-logo.png'

const Contact = () => {
  return (

    <section id="contact" className="text-center py-3">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="bottom-line"></div>
        <form>
          <div className="text-fields">
            <input
              className="text-input name-input"
              type="text"
              name="name"
              placeholder="Enter Name"
            />
            <input
              className="text-input subject-input"
              type="text"
              name="subject"
              placeholder="Subject"
            />
            <input
              className="text-input email-input"
              type="email"
              name="email"
              placeholder="Enter your email..."
            />
            <input
              className="text-input phone-input"
              type="number"
              name="phone-number"
              placeholder="Enter Phone number"
            />
            <textarea
              className="text-input message-input"
              name="message"
              placeholder="Enter a short message..."
            ></textarea>
          </div>
          <button type="submit" name='submit' className="btn-dark">Submit</button>
        </form>
        <div className="skills-images">
          <img src={htmlCssLogo} alt=""/>
          <img src={sassLogo} alt=""/>
          <img src={jsLogo} alt=""/>
          <img src={reactLogo} alt=""/>
          <img src={githubLogo} alt=""/>
        </div>
      </div>
    </section>
  )
}

export default Contact
