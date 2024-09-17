import React, { useState, useEffect } from 'react';
import '../style/Gallery.css';
import Card from './Card';

function Gallery() {
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    fetch('/data/logements.json')
      .then(response => response.json())
      .then(data => setAccommodations(data))
      .catch(error => console.error('Error fetching the accommodations:', error));
  }, []);

  return (
    <div className="gallery">
      {accommodations.map(accommodation => (
        <Card key={accommodation.id} accommodation={accommodation} />
      ))}
    </div>
  );
}

export default Gallery;
