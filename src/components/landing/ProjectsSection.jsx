import React from 'react';
import './ProjectsSection.css';
import proj1 from '../../assets/landing/sample-project.jpg'; // featured
import proj2 from '../../assets/landing/project-2.jpg';
import proj3 from '../../assets/landing/project-3.png';
import proj4 from '../../assets/landing/project-4.png';
import proj5 from '../../assets/landing/project-5.png';

const ProjectsSection = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Our Projects</h2>

      <div className="projects-grid">
        {/* Featured Project */}
        <div className="project-card featured" style={{ backgroundImage: `url(${proj1})` }}>
          <div className="overlay">
            <h3 className="project-name">Sample Project</h3>
            <button className="view-more">View More <span className="arrow">→</span></button>
          </div>
        </div>

        {/* Other large image */}
        <div className="project-card large" style={{ backgroundImage: `url(${proj2})` }}></div>

        {/* Small thumbnails */}
        <div className="project-card" style={{ backgroundImage: `url(${proj3})` }}></div>
        <div className="project-card" style={{ backgroundImage: `url(${proj4})` }}></div>
        <div className="project-card" style={{ backgroundImage: `url(${proj5})` }}></div>
      </div>

      <div className="projects-footer">
        <button className="all-projects-btn">All Projects <span className="arrow">→</span></button>
      </div>
    </section>
  );
};

export default ProjectsSection; 