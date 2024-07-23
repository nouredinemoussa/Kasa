import React from 'react';
import './Card.css';

function Card({ accommodation }) {
  return (
    <div className="card">
      <img src={accommodation.cover} alt={accommodation.title} className="card-image" />
      <div className="card-title">{accommodation.title}</div>
    </div>
  );
}

export default Card;
