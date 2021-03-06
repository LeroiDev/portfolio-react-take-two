import React from "react";
import covidLogo from "../../images/covid-tracker.jpg";
import airbnb from "../../images/airbnb.jpg";
import netflix from "../../images/netflix.png";
import breakingbad from "../../images/breakingbad.jpg";
import github from '../../images/github.jpeg'
import './projects.css'
const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Some Projects built this past month</h2>
        <div className="bottom-line"></div>
        <div className="items">
          <a href="https://google.com">
          <div className="item">
            <div className="item-image">
              <img src={covidLogo} alt="" />
            </div>
            <div className="item-text">
              <div className="item-text wrap">
                <p className="item-text-category">React</p>
                <h2 className="item-text-title">COVID-19 TRACK</h2>
              </div>
            </div>
          </div>
          </a>
          <div className="item">
            <div className="item-image">
              <img src={airbnb} alt="" />
            </div>

            <div  className="item-text">
            <a rel="noopener noreferrer" href="https://clone-airbnb-react.web.app/" target="_blank">
              <div className="item-text wrap">
                <p className="item-text-category">React</p>
                <h2 className="item-text-title">Airbnb Clone</h2>
              </div>
            </a>
            </div>
          </div>
          <div className="item">
            <div className="item-image">
              <img src={netflix} alt="" />
            </div>
            <div className="item-text">
              <div className="item-text wrap">
                <p className="item-text-category">React</p>
                <h2 className="item-text-title">NETFLIX CLONE</h2>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-image">
              <img src={github} alt="" />
            </div>
            <div className="item-text">
              <div className="item-text wrap">
                <p className="item-text-category">React</p>
                <h2 className="item-text-title">Search GitHub</h2>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-image">
              <img src={breakingbad} alt="" />
            </div>
            <div className="item-text">
              <div className="item-text wrap">
                <p className="item-text-category">React</p>
                <h2 className="item-text-title">BREAKING BAD APP</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="short">
          <h2>"GREAT DEVELOPERS NEVER STOP LEARNING"</h2>
        </div>
      </div>
    </section>
  );
};

export default Projects;
