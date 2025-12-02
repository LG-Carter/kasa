import React, { useState } from 'react';
import './slider.scss';

function Slider({ imageSlider = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Aller à l'image suivante
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % imageSlider.length);
  };

  // Revenir à l'image précédente
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + imageSlider.length) % imageSlider.length);
  };

  // Aller directement à une slide via les points
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Gérer le cas où il n'y a pas d'images
  if (!imageSlider || imageSlider.length === 0) {
    return <div className="slider-container">Aucune image disponible</div>;
  }

  // Nouveau : on cache les boutons et les points s'il n'y a qu'une seule image
  const showNavigation = imageSlider.length > 1;

  return (
    <div className="slider-container">
      <div className="slider">
        {/* Bouton Précédent - visible seulement si plus d'une image */}
        {showNavigation && (
          <button className="nav-btn prev-btn" onClick={prevSlide}>
            ❮
          </button>
        )}

        {/* Bouton Suivant - visible seulement si plus d'une image */}
        {showNavigation && (
          <button className="nav-btn next-btn" onClick={nextSlide}>
            ❯
          </button>
        )}

        {/* Les images */}
        <div className="slides-wrapper">
          {imageSlider.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Slide ${index + 1}`}
              className="slide"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            />
          ))}
        </div>

        {/* Les points en bas + indicateur de position */}
        <div className="counter">
          {/* Indicateur 1/4, 2/4 etc. */}
          <span className="slide-counter">
            {currentIndex + 1} / {imageSlider.length}
          </span>

          {/* Points de navigation - visibles seulement si plus d'une image */}
          {showNavigation &&
            imageSlider.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentIndex === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;