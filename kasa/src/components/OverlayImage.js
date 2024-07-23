import React from 'react';
import './OverlayImage.css';

function OverlayImage({ src, alt, text, darken, lightdark }) {
  return (
    <div className={`overlay-container ${darken ? 'darken' : '', lightdark ? 'lightdark' : ''}`}>
      <img src={src} alt={alt} className="overlay-image" />
      {text && <div className="overlay-text">{text}</div>}
    </div>
  );
}

export default OverlayImage;
