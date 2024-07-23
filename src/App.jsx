import React from 'react'
import Nav from './components/nav/Nav'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
        <Nav />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
    </>
  )
}

export default App