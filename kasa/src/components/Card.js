import React from 'react';
import '../style/Card.css';
import { Link } from 'react-router-dom';

function Card({ accommodation }) {
  return (
    <Link to={`/property/${accommodation.id}`} className="card-link">
    <div className="card">
      <img src={accommodation.cover} alt={accommodation.title} className="card-image" />
      <div className="card-title">{accommodation.title}</div>
    </div>
    </Link>
  );
}

export default Card;
