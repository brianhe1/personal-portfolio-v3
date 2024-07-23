import React from 'react';
import Resume from '../../assets/BrianHeResume.pdf'
import {BiDownArrowAlt} from 'react-icons/bi';

const CTA = () => {
  return (
    <div class='cta'>
        <a href={Resume} target="_blank" className='btn resume-btn'>Resume</a>
        <a href="#contact" className='btn contact-btn'>Say Hello<BiDownArrowAlt class="down-arrow-icon"/></a>
    </div>
  )
}

export default CTA