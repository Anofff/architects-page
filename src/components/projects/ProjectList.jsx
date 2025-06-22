import React, { useState } from 'react';
import './ProjectList.css';
import ProjectDetail from './ProjectDetail';
import projectOneImage from '../../assets/projects/project-one.png';
import blueprintImage from '../../assets/projects/blueprint.png';

// Mock data for the projects list
const projectData = [
  {
    title: 'Sample Project 1',
    description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    image: projectOneImage,
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with.',
    mainImage: projectOneImage,
    secondaryImage: 'https://i.pinimg.com/736x/23/60/93/23609356fd4c2170bbfc79f63e38af85.jpg',
    blueprint1: blueprintImage,
    blueprint2: 'https://th.bing.com/th/id/OIP.W5XRZUSctJVKx946Sm49LgAAAA?rs=1&pid=ImgDetMain&cb=idpwebpc2',
  },
  {
    title: 'Sample Project 2',
    description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    image: projectOneImage,
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with.',
    mainImage: projectOneImage,
    secondaryImage: 'https://via.placeholder.com/600x400',
    blueprint1: blueprintImage,
    blueprint2: 'https://via.placeholder.com/600x400',
  },
  {
    title: 'Sample Project 3',
    description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    image: projectOneImage,
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with.',
    mainImage: projectOneImage,
    secondaryImage: 'https://via.placeholder.com/600x400',
    blueprint1: blueprintImage,
    blueprint2: 'https://via.placeholder.com/600x400',
  },
];

const ProjectList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const totalPages = 5;

  const handleViewMore = (project) => {
    setSelectedProject(project);
  };

  const handleBack = () => {
    setSelectedProject(null);
  };

  if (selectedProject) {
    return <ProjectDetail project={selectedProject} onBack={handleBack} />;
  }

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
              <button className="project-view-more" onClick={() => handleViewMore(project)}>View More →</button>
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