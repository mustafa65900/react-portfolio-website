import React from 'react'
import {FiLinkedin} from 'react-icons/fi'
import {FiGithub} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/mustafa-master" target="_blank"><FiLinkedin /></a>
        <a href="https://github.com/mustafa65900" target="_blank"><FiGithub /></a>
        <a href="https://twitter.com" target="_blank"><FiTwitter /></a>
    </div>
  )
}

export default HeaderSocials