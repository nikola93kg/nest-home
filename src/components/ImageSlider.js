import React, { useState } from 'react';
import '../styles/ImageSlider.css';
import img from '../store/images'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

function ImageSlider() {
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="slider">
      <div className="slider-images">
        {img.map((image, index) => (
          <img
            key={image}
            src={image}
            alt="Slider"
            className={`slider-image ${currentIndex === index ? 'active' : ''}`}
          />
        ))}
      </div>
      <div className="slider-controls">
        <button className="slider-button" onClick={handlePrevious}> <FaArrowAltCircleLeft /></button>
        <button className="slider-button" onClick={handleNext}><FaArrowAltCircleRight /></button>
      </div>
    </div>
  );
}

export default ImageSlider;
