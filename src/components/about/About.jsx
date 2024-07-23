import React from "react";
import "./about.css";
import ME from "../../assets/me-drawing.png";
import { BsSpotify } from "react-icons/bs";
import ALBUM from "../../assets/album.png";

const About = () => {
  return (
    <section id="about">
      <div className="container about-container">
        <div className="about-me-left">
          <h2 class="intro"> I'm Brian.</h2>
          <h6 class="about-text">
            Hey there, it’s nice to see you here! I'm Brian, a recent computer
            engineering graduate from Rutgers University. My journey into the
            world of computers began in high school, where I discovered my
            passion for technology and its vast applications. Since then, my
            love for it has only grown stronger.
          </h6>
          <h6 class="about-text">
            Throughout my time at university, I've been fortunate enough to work
            on diverse projects that have allowed me to develop a wide range of
            skills. From creating responsive user interfaces to diving into the
            world of data analytics, I've been driven by a desire to craft
            effective solutions to complex problems.
          </h6>
          <h6 class="about-text">
            Despite being fairly new to the industry, I've honed my focus on
            delivering efficient and maintainable code that empowers users and
            simplifies their lives. My passion for software engineering comes
            from its transformative power – the ability to impact millions of
            lives and businesses with just a few lines of code. This profound
            influence, combined with my curiosity and drive for learning, fuels
            my continuous growth.
          </h6>
          <h6 class="about-text">
            When I'm not at my computer, you'll likely find me staying active
            with workouts, enjoying some mobile gaming, or indulging my random
            interest in interior design by flipping through the latest issue of
            Architectural Digest.
          </h6>
        </div>
        <div className="about-me-right">
          <img className="me-drawing" src={ME} />
          <div className="spotify-component">
            <BsSpotify class="spotify-icon" />
            <div class="spotify-text">
              <h6>Currently on repeat</h6>
              <a
                class="fav-song"
                href="https://open.spotify.com/album/4bIEy1wDeaEklS1BanbsmR?si=PYcG62pwQfG0YuFgZissyA"
                target="_blank"
              >
                Where You Are
              </a>
            </div>
            <a
              href="https://open.spotify.com/album/4bIEy1wDeaEklS1BanbsmR?si=PYcG62pwQfG0YuFgZissyA"
              target="_blank"
            >
              <img class="album-cover" src={ALBUM}></img>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
