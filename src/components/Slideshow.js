import React, { useState } from 'react';
import '../style/Slideshow.css';
import ChevronLeft from '../images/chevron-left.png'
import ChevronRight from '../images/chevron-right.png'

function Slideshow({ pictures }) {
  const [current, setCurrent] = useState(0);
  const length = pictures.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(pictures) || pictures.length <= 0) {
    return null;
  }

  return (
    <div className="slideshow">
      {pictures.length > 1 && (
        <>
          <div className="left-arrow" onClick={prevSlide}>
            <img src={ChevronLeft} alt="Clic gauche"/>
          </div>
          <div className="right-arrow" onClick={nextSlide}>
          <img src={ChevronRight} alt="Clic droit"/>
          </div>
          <div className="slideshow-counter">
            {current + 1} / {length}
          </div>
        </>
      )}
      {pictures.map((picture, index) => (
        <div
          className={index === current ? 'slide active' : 'slide'}
          key={index}
        >
          {index === current && (
            <img src={picture} alt="travel" className="image" />
          )}
        </div>
      ))}
    </div>
  );
}

export default Slideshow;
