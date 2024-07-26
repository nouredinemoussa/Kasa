import React from 'react';
import '../style/HousingRating.css';

function HousingRating({ rating }) {
  const maxRating = 5;
  const stars = [];

  for (let i = 1; i <= maxRating; i++) {
    if (i <= rating) {
      stars.push(<i key={i} className="fas fa-star filled"></i>);
    } else {
      stars.push(<i key={i} className="fas fa-star empty"></i>);
    }
  }

  return <div className="rating">{stars}</div>;
}

export default HousingRating;
