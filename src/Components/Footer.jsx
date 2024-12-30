import React from 'react'
import './Footer.css'
import footer_logo from '../assets/footer_logo.svg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />

            </div>
           
        </div>
        <hr />
        <div className="footer-bottom">
          <p className="footer-bottom-left">magni repudiandae, facilis molestiae sequi. </p>  
          <div className="footer-bottom-right">
            <p> Terms of Services</p>
            <p> Contact with me</p>
            <p> privacy policy</p>
          </div>
        </div>
    </div>
  )
}

export default Footer