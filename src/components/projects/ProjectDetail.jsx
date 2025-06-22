import React from 'react';
import './ProjectDetail.css';

const ProjectDetail = ({ project, onBack }) => {
  return (
    <div className="project-detail-container">
      <button onClick={onBack} className="back-button">← Back to Projects</button>
      
      <header className="project-detail-header">
        <h1>{project.title}</h1>
      </header>

      <img 
        src={project.mainImage || 'https://via.placeholder.com/1200x400'} 
        alt={project.title} 
        className="project-detail-main-image" 
      />

      <div className="project-detail-content">
        <div className="project-detail-text">
          <p>{project.longDescription}</p>
        </div>
        <img 
          src={project.secondaryImage || 'https://via.placeholder.com/600x400'} 
          alt="Project secondary view" 
          className="project-detail-secondary-image" 
        />
      </div>

      <div className="project-detail-blueprints">
        <img 
          src={project.blueprint1 || 'https://via.placeholder.com/600x400'} 
          alt="Blueprint 1" 
          className="project-blueprint-image" 
        />
        <img 
          src={project.blueprint2 || 'https://via.placeholder.com/600x400'} 
          alt="Blueprint 2" 
          className="project-blueprint-image" 
        />
      </div>
    </div>
  );
};

export default ProjectDetail; 