import React from 'react';
import './Hero.css';
import { Link } from 'react-scroll'; // smooth scroll for "Explore" button

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <h1>Empower Your Future with Quality Education</h1>
        <p>
          Join our vibrant learning community to explore new opportunities, grow your skills, and
          achieve your dreams with expert guidance and real-world experience.
        </p>

        <div className="hero-buttons">
          <Link
            to="program"
            smooth={true}
            duration={500}
            offset={-100}
            className="btn primary-btn"
          >
            Explore Programs
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-100}
            className="btn secondary-btn"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
