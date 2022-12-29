import React from 'react'
import './footer.css'
import {FiFacebook} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Mustafa</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#testimonials">Blogs</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100005716027811" target="_blank"><FiFacebook/></a>
        <a href="https://www.instagram.com/mustafa._.nadeem/" target="_blank"><FiInstagram/></a>
        <a href="https://twitter.com" target="_blank"><FiTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Mustafa Master. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer