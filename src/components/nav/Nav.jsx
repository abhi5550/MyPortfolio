import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  const [activNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#"  title="Home" onClick={() => setActiveNav('#')} className={activNav === '#' ? 'active' : '' }><AiOutlineHome/></a>
      <a href="#about" title="About" onClick={() => setActiveNav('#about')} className={activNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experiance" title="Experience" onClick={() => setActiveNav('#experiance')} className={activNav === '#experiance' ? 'active' : ''}><BiBook/></a>
      <a href="#services" title="Services" onClick={() => setActiveNav('#services')} className={activNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact"title="Contact" onClick={() => setActiveNav('#contact')} className={activNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav