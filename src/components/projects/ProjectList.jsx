import React, { useState } from 'react';
import './ProjectList.css';

// Mock data for the projects list
const projectData = [
  {
    title: 'Sample Project',
    description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    image: '../../assets/sample-project.jpg',
  },
  {
    title: 'Sample Project 2',
    description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    image: '../../assets/about-2.jpg',
  },
  {
    title: 'Sample Project 3',
    description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    image: '../../assets/about-3.jpg',
  },
];

const ProjectList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  return (
    <div className="project-list-container">
      <header className="project-list-header">
        <h1 className="project-list-title-light">Our</h1>
        <h1 className="project-list-title-dark">Projects</h1>
      </header>

      <main className="projects-content">
        {projectData.map((project, index) => (
          <div key={index} className="project-item">
            <div className="project-item-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-item-info">
              <h2 className="project-item-title">{project.title}</h2>
              <p className="project-item-description">{project.description}</p>
              <button className="project-view-more">View More →</button>
            </div>
          </div>
        ))}
      </main>

      <footer className="project-list-pagination">
         <div className="page-info">
          <span className="current-page">{String(currentPage).padStart(2, '0')}</span>
          <span className="divider">/</span>
          <span className="total-pages">{String(totalPages).padStart(2, '0')}</span>
        </div>
        <div className="pagination-arrows">
          <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))}>←</button>
          <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}>→</button>
        </div>
      </footer>
    </div>
  );
};

export default ProjectList; 