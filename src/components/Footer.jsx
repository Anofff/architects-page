import React from 'react';
import './Footer.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import logo from '../assets/logo-white.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">

          {/* Logo Section */}
          <div className="footer-section logo-section">
            <div className="footer-logo">
              <img src={logo} alt="Logo" />
            </div>
          </div>

          {/* Information Section */}
          <div className="footer-section info-section">
            <h4 className="section-title">Information</h4>
            <ul className="footer-links">
              <li><a href="/">MAIN</a></li>
              <li><a href="/gallery">GALLERY</a></li>
              <li><a href="/projects">PROJECTS</a></li>
              {/* <li><a href="#certifications">CERTIFICATIONS</a></li> */} 
              {/* <li><a href="#contacts">CONTACTS</a></li> */} 
            </ul>
          </div>

          {/* Contacts Section */}
          <div className="footer-section contacts-section">
            <h4 className="section-title">Contacts</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <p>1234 Sample Street</p>
                  <p>Austin, TX 78704</p>
                </div>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <p>512.333.2222</p>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <p>sampleemail@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="footer-section social-section">
            <h4 className="section-title">Social Media</h4>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" className="social-link" aria-label="Pinterest">
                <FaPinterestP />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
