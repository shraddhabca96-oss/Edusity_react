import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import logo from '../../assets/images.jpg';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar container ${sticky ? 'dark-nav' : ''}`}>
      {/* ===== Logo ===== */}
      <img src={logo} alt="logo" className="logo" />

      {/* ===== Mobile Menu Icon ===== */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {/* ===== Nav Links ===== */}
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <Link
            to="home"
            smooth
            duration={500}
            offset={-100}
            spy
            activeClass="active"
            onClick={closeMenu}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="program"
            smooth
            duration={500}
            offset={-260}
            spy
            activeClass="active"
            onClick={closeMenu}
          >
            Program
          </Link>
        </li>

        <li>
          <Link
            to="about"
            smooth
            duration={500}
            offset={-150}
            spy
            activeClass="active"
            onClick={closeMenu}
          >
            About Us
          </Link>
        </li>

        <li>
          <Link
            to="campus"
            smooth
            duration={500}
            offset={-260}
            spy
            activeClass="active"
            onClick={closeMenu}
          >
            Campus
          </Link>
        </li>

        <li>
          <Link
            to="testimonials"
            smooth
            duration={500}
            offset={-260}
            spy
            activeClass="active"
            onClick={closeMenu}
          >
            Testimonials
          </Link>
        </li>

        {/* ✅ Added Video section link */}
        <li>
          <Link
            to="video"
            smooth
            duration={500}
            offset={-120}
            spy
            activeClass="active"
            onClick={closeMenu}
          >
            Video
          </Link>
        </li>

        <li>
          <Link
            to="contact"
            smooth
            duration={500}
            offset={-120}
            spy
            activeClass="active"
            onClick={closeMenu}
            className="btn"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
