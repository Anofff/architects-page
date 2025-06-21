import React from 'react';
import './AboutSection.css';
import img1 from '../../assets/landing/about-1.jpg';
import img2 from '../../assets/landing/about-2.jpg';
import img3 from '../../assets/landing/about-3.jpg';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-images">
        <div className="top-row">
          <img src={img1} alt="Architecture 1" />
          <img src={img2} alt="Architecture 2" />
        </div>
        <div className="bottom-row">
          <img src={img3} alt="Architecture 3" />
        </div>
      </div>
      <div className="about-text">
        <h2>About</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </p>
        <button className="read-more-btn">
          Read More <span>→</span>
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
