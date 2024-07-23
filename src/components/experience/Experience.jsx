import React from 'react'
import './experience.css'
import {RiArrowRightSLine} from 'react-icons/ri'

const Experience = () => {
  return (
    <section id='experience'>
      <div className="container experience-container">
        <div className="experience-left">
          <h2>my experience</h2>
          <div className="frontend-experience">
            <h4>Frontend Development</h4>
            <div className="experience-list">
              <article className="experience-item">
                <RiArrowRightSLine className="experience-item-icon"/>
                <div>
                  <h5>HTML</h5>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience-item">
                <RiArrowRightSLine className="experience-item-icon"/>
                <div>
                  <h5>CSS</h5>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience-item">
                <RiArrowRightSLine className="experience-item-icon"/>
                <div>
                  <h5>JavaScript</h5>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience-item">
                <RiArrowRightSLine className="experience-item-icon"/>
                <div>
                  <h5>BootStrap</h5>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience-item">
                <RiArrowRightSLine className="experience-item-icon"/>
                <div>
                  <h5>Tailwind</h5>
                  <small className="text-light">Beginner</small>
                </div>
              </article>
              <article className="experience-item">
                <RiArrowRightSLine className="experience-item-icon"/>
                <div>
                  <h5>React</h5>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
          </div>
          <div className="backend-experience">
            <h4>Backend Development</h4>
            <div className="experience-list">
            <article className="experience-item">
                <RiArrowRightSLine className="experience-item-icon"/>
                <div>
                  <h5>Java</h5>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience-item">
                <RiArrowRightSLine className="experience-item-icon"/>
                <div>
                  <h5>JavaScript</h5>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience-item">
                <RiArrowRightSLine className="experience-item-icon"/>
                <div>
                  <h5>Python</h5>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience-item">
                <RiArrowRightSLine className="experience-item-icon"/>
                <div>
                  <h5>MySQL</h5>
                  <small className="text-light">Beginner</small>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className="experience-right">
        <div className="real-experience">
            <h6 className="timeline">July 2024 — PRESENT</h6>
            <article class="experience-info">
              <h5 className="experience-title">Software Engineering Fellow • Headstarter AI</h5>
              <h6 className="experience-description">Participate in a 7 week fellowship that helps its fellows grow and develop best practices as a software engineer.</h6>
              <div className="languages-used">
                <div className="language">HTML</div>
                <div className="language">CSS</div>
                <div className="language">JavaScript</div>
                <div className="language">React</div>
              </div>
            </article>
          </div>
          <div className="real-experience">
            <h6 className="timeline">Feb 2023 — May 2023</h6>
            <article class="experience-info">
              <h5 className="experience-title">Software Engineering Fellow • Rutgers Blueprint</h5>
              <h6 className="experience-description">Utilized third-party libraries and React hooks to effectively manage state and facilitate data sharing between site components, following a comprehensive syllabus. Worked closely with mentors and led a team of two fellows to design and develop a custom webpage with advanced functionality, integrating external APIs to streamline development and enhance site performance. </h6>
              <div className="languages-used">
                <div className="language">HTML</div>
                <div className="language">CSS</div>
                <div className="language">JavaScript</div>
                <div className="language">React</div>
                <div className="language">Parcel.js</div>
                <div className="language">Material UI</div>
              </div>
            </article>
          </div>
          <div className="real-experience">
            <h6 className="timeline">May 2021 — Dec 2021</h6>
            <article class="experience-info">
              <h5 className="experience-title">Data Analytics Intern • Robert Wood Johnson University Hospital</h5>
              <h6 className="experience-description">Collaborated with a project team of four to develop data-cleansing algorithms, implementing variable filtering and outlier detection techniques that reduced survey data size by 25%. Utilized Python and its libraries to create comprehensive visualization models and interactive analysis reports. Developed tools directly supported over 10 pediatricians in interpreting patient and caregiver medication preferences for treating inactive juvenile idiopathic arthritis.</h6>
              <div className="languages-used">
                <div className="language">Python</div>
                <div className="language">pandas</div>
                <div className="language">NumPy</div>
                <div className="language">Matplotlib</div>
                <div className="language">seaborn</div>
                <div className="language">Colaboratory</div>
              </div>
            </article>
          </div>
        </div>

      </div>
  </section>
  )
}

export default Experience