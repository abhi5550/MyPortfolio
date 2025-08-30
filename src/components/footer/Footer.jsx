import React from 'react'
import './footer.css'
import {BiLogoFacebook, BiLogoLinkedin} from 'react-icons/bi'
import {BsInstagram} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Abhinav</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiance">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.instagram.com/abhinavsonakpuriya/" target='_blank'><BsInstagram/></a>
        <a href="https://www.facebook.com/abhi5550/" target='_blank'><BiLogoFacebook/></a>
        <a href="https://www.linkedin.com/in/abhi5550/" target='_blank'><BiLogoLinkedin/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Abhinav Sonakpuriya, All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer