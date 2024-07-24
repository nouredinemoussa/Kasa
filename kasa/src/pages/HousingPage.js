import React from 'react';
import { useParams } from 'react-router-dom';
import Slideshow from '../components/Slideshow';

function HousingPage() {
  const { id } = useParams();
  const [property, setProperty] = React.useState(null);

  React.useEffect(() => {
    fetch('/data/logements.json')
      .then(response => response.json())
      .then(data => {
        const foundProperty = data.find(item => item.id === id);
        setProperty(foundProperty);
      })
      .catch(error => console.error('Error fetching the property:', error));
  }, [id]);

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="housing-page">
      <h1>{property.title}</h1>
      <Slideshow pictures={property.pictures} />
      <p>{property.description}</p>
    </div>
  );
}

export default HousingPage;