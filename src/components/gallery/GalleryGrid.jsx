import React, { useState } from 'react';
import './GalleryGrid.css';

// Create a mock list of images for the grid
// In a real app, this would come from a CMS or API
const images = [
  'placeholder', // For the grey box
  '../../assets/project-2.jpg',
  '../../assets/about-1.jpg',
  '../../assets/project-3.png',
  '../../assets/project-4.png',
  '../../assets/project-5.png',
  '../../assets/about-2.jpg',
  '../../assets/about-3.jpg',
  '../../assets/sample-project.jpg',
  '../../assets/hero-building.png',
];

const GalleryGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Example total pages

  return (
    <div className="gallery-page-container">
      <header className="gallery-header">
        <h1 className="gallery-title-light">Photo</h1>
        <h1 className="gallery-title-dark">Gallery</h1>
      </header>

      <div className="gallery-grid">
        {images.map((imgSrc, index) => (
          <div
            key={index}
            className={`gallery-item ${imgSrc === 'placeholder' ? 'placeholder' : ''}`}
            style={imgSrc !== 'placeholder' ? { backgroundImage: `url(${imgSrc})` } : {}}
          ></div>
        ))}
      </div>

      <footer className="gallery-pagination">
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

export default GalleryGrid; 