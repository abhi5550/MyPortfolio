import React from 'react'
import './footer.css'
import {BiLogoFacebook, BiLogoTwitter} from 'react-icons/bi'
import {BsInstagram} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Abhinav</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.instagram.com/abhinavsonakpuriya/" target='_blank'><BsInstagram/></a>
        <a href="https://www.facebook.com/abhi5550/" target='_blank'><BiLogoFacebook/></a>
        <a href="https://facebook.com" target='_blank'><BiLogoTwitter/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Abhinav Sonakpuriya, All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer