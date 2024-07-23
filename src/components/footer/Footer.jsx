import React from 'react'
import './footer.css'
import Resume from '../../assets/BrianHeResume.pdf'
import LOGO from '../../assets/logo.png'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaGithubAlt} from 'react-icons/fa'
import {BiLogoGmail} from 'react-icons/bi'

const Footer = () => {
  return (
    <footer>
      <div class="logo-and-socials">
        <a href="#">
          <img src={LOGO} class="footer-logo"></img>
        </a>
        <div className="footer-socials">
          <h6>GET IN TOUCH</h6>
          <a href="https://github.com/brianhe1" target="_blank"><FaGithubAlt/></a>
          <a href="https://www.linkedin.com/in/brianhe-/" target="_blank"><FaLinkedinIn/></a>
          <a href="https://www.instagram.com/brianhe_/" target="_blank"><FaInstagram/></a>
          <a href="mailto:brianhe0507@gmail.com" target="_blank"><BiLogoGmail/></a>
        </div>
      </div>
      <div className="permalinks-column">
        <h6>EXPLORE AGAIN</h6>
        <ul className="permalinks">
          <li><a href="#experience">My Experience</a></li>
          <li><a href="#projects">My Projects</a></li>
          <li><a href={Resume} target="_blank">My Resume</a></li>
        </ul>
      </div>
      <div className="site-description">
        <h6>Roughly designed in 
          <b><a href="https://procreate.com/" target="_blank"> Procreate </a></b>
          and coded in 
          <b><a href="https://code.visualstudio.com/" target="_blank"> Visual Studio Code</a></b>
          . Built using
          <b><a href="https://react.dev/" target="_blank"> React </a></b>
          and <b>Vanilla CSS</b>, deployed with 
          <b><a href="https://pages.github.com/" target="_blank"> Github Pages</a></b>
          . The heading text is rendered in the
          <b><a href="https://developer.apple.com/fonts/" target="_blank"> San Francisco </a></b>
          typeface, while all remaining text is set in the 
          <b><a href="https://fonts.google.com/specimen/Poppins" target="_blank"> Poppins </a></b>
          typeface. Typing animation makes use of
          <b><a href="https://github.com/mattboldt/typed.js" target="_blank"> typed.js </a></b>
           and email handling is achieved through 
           <b><a href="https://www.emailjs.com" target="_blank"> emailJS </a></b>
           .
        </h6>
      </div>
    </footer>
  )
}

export default Footer