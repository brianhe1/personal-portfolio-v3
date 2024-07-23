import React from 'react'
import './nav.css'
import {useState} from 'react'
import LOGO from '../../assets/logo.png'
import LOGO_HOVER from '../../assets/logo-hover.png';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <nav>
            <div className="logo">
                <a 
                    href="#"
                    onClick={() => setActiveNav('#')} 
                    className={activeNav === '#' ? 'active' : ''}
                >
                <img
                    src={isHovered ? LOGO_HOVER : LOGO}
                    alt="Logo"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
                </a>
            </div>

            <div className='nav-links-container'>
                <input type='checkbox' className='toggle-menu'/>
                <div className='hamburger'></div>

                <ul className='menu'>
                    <li><a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>Home</a></li>
                    <li><a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About</a></li>
                    <li><a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>Experience</a></li>
                    <li><a href ='#projects'onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}>Projects</a></li>
                    <h6>SAY HELLO</h6>
                    <li><a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>Contact</a></li>
                </ul>
                
                <div className="nav-links">
                    <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>Home</a>
                    <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About</a>
                    <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>Experience</a>
                    <a href ='#projects'onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}>Projects</a>
                    <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'btn active' : 'btn'}>Let's Talk</a>
                </div>
                
            </div>
        </nav>
  )
}

export default Nav