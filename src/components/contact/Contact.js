import React from 'react';
import './contactStyle.css';
import reactlogo from '../../images/react.svg';

const Contact = () => {
  return (

    <section id="contact-a" className="text-center py-3">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="bottom-line"></div>
        <p className="lead">Here is how you can reach me</p>
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
              type="emial"
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
          <button type="submit" className="btn-dark">Submit</button>
        </form>
        <img src={reactlogo} alt=""/>
      </div>
    </section>
  )
}

export default Contact
