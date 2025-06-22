import React, { useState } from 'react';
import './GalleryGrid.css';

// Import all images
// In a real app, this data would likely come from an API
import gallery1 from '../../assets/gallery/gallery-photo-1.jpg';
import gallery2 from '../../assets/gallery/gallery-photo-2.jpg';
import gallery3 from '../../assets/gallery/gallery-photo-3.jpg';
import gallery4 from '../../assets/gallery/gallery-photo-4.jpg';
import gallery5 from '../../assets/gallery/gallery-photo-5.jpg';
import gallery6 from '../../assets/gallery/gallery-photo-6.jpg';
import gallery7 from '../../assets/gallery/gallery-photo-7.jpg';
import gallery8 from '../../assets/gallery/gallery-photo-8.jpg';
import gallery9 from '../../assets/gallery/gallery-photo-9.jpg';

const allImages = [
  'placeholder',
  gallery1, gallery2, gallery3, gallery4, gallery5,
  gallery6, gallery7, gallery8, gallery9,
  // Add more images here to see pagination in action
];

const IMAGES_PER_PAGE = 6;

const GalleryGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allImages.length / IMAGES_PER_PAGE);

  // Calculate the images for the current page
  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
  const currentImages = allImages.slice(startIndex, startIndex + IMAGES_PER_PAGE);

  return (
    <div className="gallery-page-container">
      <header className="gallery-header">
        <h1 className="gallery-title-light">Photo</h1>
        <h1 className="gallery-title-dark">Gallery</h1>
      </header>

      <div className="gallery-grid">
        {currentImages.map((imgSrc, index) => (
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
          <button 
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            ←
          </button>
          <button 
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            →
          </button>
        </div>
      </footer>
    </div>
  );
};

export default GalleryGrid; 