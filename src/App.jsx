import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer"; // ✅ NEW IMPORT
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      {/* Navigation */}
      <Navbar />

      {/* Hero section */}
      <Hero />

      <div className="container">
        {/* Programs */}
        <Title subtitle="OUR PROGRAMS" title="What We Offer" />
        <Programs />

        {/* About section */}
        <Title subtitle="ABOUT US" title="Who We Are" />
        <About />

        {/* 🎬 Video Player Section */}
        <Title subtitle="CAMPUS TOUR" title="Explore Our University" />
        <VideoPlayer />

        {/* Gallery / Campus */}
        <Title subtitle="GALLERY" title="Our Beautiful Campus" />
        <Campus />

        {/* Testimonials */}
        <Title subtitle="TESTIMONIALS" title="What Students Say" />
        <Testimonials />

        {/* Contact */}
        <Title subtitle="CONTACT US" title="Get in Touch" />
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
