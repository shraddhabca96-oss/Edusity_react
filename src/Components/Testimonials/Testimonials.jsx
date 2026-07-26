import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import user_1 from "../../assets/premium_photo-1661593195372-874ca9d29713.jpg";
import user_2 from "../../assets/istockphoto-1317804584-612x612.jpg";
import user_3 from "../../assets/c26dacb38a8edce0945315ff62fefed3.jpg";

const testimonialsData = [
  {
    img: user_1,
    name: "William Jackson",
    university: "Edusity University, USA",
    review: `“I chose to pursue a degree in Computer Science because technology has always fascinated me. 
    Edusity offered a program that blends innovation, teamwork, and real-world experience. 
    Through hands-on projects, I’ve gained the confidence to build and design systems that can make a difference.”`,
  },
  {
    img: user_2,
    name: "Sophia Brown",
    university: "Edusity University, Canada",
    review: `“The learning experience at Edusity has been transformative. The professors encourage curiosity, 
    and the collaborative environment pushes me to think critically and creatively every day.”`,
  },
  {
    img: user_3,
    name: "Emma Wilson",
    university: "Edusity University, UK",
    review: `“Being part of Edusity has opened so many doors for me. From networking to real-world projects, 
    every moment here has prepared me to thrive in the tech industry.”`,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  // ✅ Auto-slide every 5 seconds (pause-friendly)
  useEffect(() => {
    const auto = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(auto);
  }, []);

  const { img, name, university, review } = testimonialsData[current];

  return (
    <section className="testimonials" id="testimonials">
      <h2 className="testimonials-title">What Our Students Say</h2>

      <div className="testimonial-container">
        {/* Arrows repositioned for thumb-friendly use */}
        <button
          className="arrow-btn back-btn"
          onClick={prevSlide}
          aria-label="Previous testimonial"
        >
          <FaArrowLeft />
        </button>

        <div className="slide">
          <div className="user-info">
            <img src={img} alt={name} className="user-img" />
            <div>
              <h3>{name}</h3>
              <span>{university}</span>
            </div>
          </div>
          <p className="user-review">{review}</p>
        </div>

        <button
          className="arrow-btn next-btn"
          onClick={nextSlide}
          aria-label="Next testimonial"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* ✅ Slide indicators for mobile */}
      <div className="testimonial-dots">
        {testimonialsData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
