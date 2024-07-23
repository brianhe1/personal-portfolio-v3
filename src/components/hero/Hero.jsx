import React from 'react'
import CTA from "./CTA"
import './hero.css'
import Typed from 'typed.js';

const Hero = () => {
    // Create reference to store the DOM element containing the animation
    const identities = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(identities.current, {
        strings: ['frontend developer.', 'computer engineering graduate.', 'junior software engineer.'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
        backDelay: 1500,
        autoInsertCss: true,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);

  return (
    <section id='home'>
      <header>
        <div className="container hero-container">
          <h1>Hi, I'm Brian</h1>
          <h2>— a <span ref={identities} /></h2>
        </div>
        <CTA />
      </header>
    </section>
  )
}

export default Hero