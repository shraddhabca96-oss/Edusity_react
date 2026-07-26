import React from 'react';
import './About.css';
import about_img from '../../assets/47274.jpg';
import play_icon from '../../assets/play-button-icon-png-17.png';

const About = () => {
  return (
    <div className="about">
      {/* Left Section */}
      <div className="about-left">
        <div className="image-container">
          <img src={about_img} alt="About Nurturing University" className="about-img" />
          <img src={play_icon} alt="Play Icon" className="play-icon" />
        </div>
      </div>

      {/* Right Section */}
      <div className="about-right">
        <h3>ABOUT NURTURING UNIVERSITY</h3>
        <h2>Empowering Minds, Shaping Futures</h2>
        <p>
          Nurturing University is dedicated to fostering academic excellence,
          innovation, and holistic growth. Our mission is to provide students
          with the skills, knowledge, and values needed to thrive in a rapidly
          changing world. Through cutting-edge research, inclusive education,
          and a vibrant campus community, we empower learners to become leaders
          and changemakers of tomorrow.
        </p>

        <p>
          At Nurturing University, we believe education is not just about learning —
          it’s about transforming lives. Join us in our journey of discovery,
          creativity, and purpose.
        </p>
      </div>
    </div>
  );
};

export default About;


