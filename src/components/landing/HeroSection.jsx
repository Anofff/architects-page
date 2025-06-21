import React from 'react';
import './HeroSection.css'; 
import heroImg from '../../assets/landing/hero-building.png'; 

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h2 className='hero-text-light'>PROJECT</h2>
        <h2 className='hero-text-dark'>Lorum</h2>
        <div className="hero-arrows">
          <button>{'←'}</button>
          <button>{'→'}</button>
        </div>
        <p className="page-indicator">01 / 02</p>
      </div>
      <div className="hero-image">
        <img src={heroImg} alt="Featured building" />
        <button className="view-project">View Project →</button>
      </div>
    </section>
  );
};

export default HeroSection;
