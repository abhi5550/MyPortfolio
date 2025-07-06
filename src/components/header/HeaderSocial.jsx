import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub,} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocial = () => {
  return (
    <div className="header_social">
        <a href="https://www.linkedin.com/in/abhi5550/" target ="_blank"><BsLinkedin/></a>
        <a href="https://github.com/abhi5550" target ="_blank"><FaGithub/> </a>
        <a href="https://www.scaler.com/academy/profile/f29cf7f897e8" target ="_blank"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocial