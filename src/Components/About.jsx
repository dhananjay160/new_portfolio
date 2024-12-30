import React from "react";
import "./About.css";
import theme_pattern from "../assets/theme_pattern.svg";
import about_profile from "../assets/profile.jpeg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={about_profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Passionate front-end developer with expertise in creating
              user-friendly web designs. GDG core member and Aarambh
              contributor.
            </p>
            <p>
              Freelancing front-end developer and Unified Mentor intern with a
              passion for crafting user-friendly designs and experiences.
            </p>
          </div>
          <div className="about-skills">
            <div className="skill">
              <p >HTML&CSS </p>
            </div>
            <div className="skill">
              <p >Javascript  </p>
            </div>
            <div className="skill">
              <p >React JS  </p>
            </div>
            <div className="skill">
              <p > DSA In Java  </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1> 1+</h1>
            <p>Years of Experience</p>
            
        </div>
        <hr />
        <div className="about-achievement">
            <h1> 2+</h1>
            <p>PROJECTS COMPLETED</p>
            
        </div>
        <hr />
        <div className="about-achievement">
            <h1> 1+</h1>
            <p>LIVE PROJECTS</p>
            
        </div>
        <hr />
        <div className="about-achievement">
            <h1> 100+</h1>
            <p>QUESTION  SOLVE AT GFG</p>
            
        </div>
      </div>
    </div>
  );
};

export default About;
