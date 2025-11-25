// src/App.js
import React, { useState } from 'react';
import './slider.scss';

// Quelques images gratuites pour tester (remplace par les tiennes si tu veux)
const slides = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Aller à l'image suivante
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  // Revenir à l'image précédente
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider-container">
      <h1>Mon Slider from Scratch 🚀</h1>

      <div className="slider">
        {/* Bouton Précédent */}
        <button className="nav-btn prev-btn" onClick={prevSlide}>
          ❮
        </button>

        {/* Bouton Suivant */}
        <button className="nav-btn next-btn" onClick={nextSlide}>
          ❯
        </button>

        {/* Les images */}
        <div className="slides-wrapper">
          {slides.map((slide, index) => (
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

        {/* Compteur de slides */}
        <div className="counter">
          {currentIndex + 1} / {slides.length}
        </div>
      </div>
    </div>
  );
}

export default Slider;