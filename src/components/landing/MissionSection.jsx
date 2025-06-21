// Mission Statement Section Component
import React from 'react';
import './MissionSection.css';

const MissionSection = () => {
  return (
    <section className="mission-section">
      <h2 className="mission-title">Main Focus/Mission Statement</h2>

      <div className="mission-content">
        <div className="mission-item">
          <div className="mission-number">1</div>
          <p className="mission-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            efficitur, lectus et facilisis placerat.
          </p>
        </div>

        <div className="mission-item">
          <div className="mission-number">2</div>
          <p className="mission-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            efficitur, lectus et facilisis placerat, magna mauris porttitor
            tortor, a auctor est felis ut nisl.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
