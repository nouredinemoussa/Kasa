import React from 'react';
import '../style/OverlayImage.css';

function OverlayImage({ src, alt, text, darken, lightdark }) {
  return (
    <div className="overlay-container">
      <img src={src} alt={alt} className={`overlay-image ${darken ? 'darken' : ''} ${lightdark ? 'lightdark' : ''}`} />
      {text && <div className="overlay-text">{text}</div>}
    </div>
  );
}

export default OverlayImage;
