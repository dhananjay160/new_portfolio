import React from 'react'
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'; 
import profile_img from '../assets/profile_img.png';
const Hero = () => {
  return (
    
    <div id='home' className="Hero">
      <div className='profile'>
      <img src={profile_img} alt="Profile Image" />
      </div>
      <h1>
        <span>I’m Dhananjay Kashodhan</span> <br />
        An Accomplished Frontend Developer
      </h1>
      <p>
        I am proud to lead web development at GDG (Google Developer Groups) and
        co-lead web development at Aarambh.
      </p>
      <div className="Hero-action">
        <div className="Hero-connect"><AnchorLink className = "anchor-link" offset={50} href ="#contact"><p  onClick={()=>setMenu("contact")} >Conatact with me</p></AnchorLink></div>
        <div className="Hero-resume">View My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
