import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import Collapse from '../components/Collapse';
import HousingRating from '../components/HousingRating';
import '../style/HousingPage.css';

function HousingPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = React.useState(null);

  React.useEffect(() => {
    fetch('/data/logements.json')
      .then(response => response.json())
      .then(data => {
        const foundProperty = data.find(item => item.id === id);
        if (foundProperty) {
          setProperty(foundProperty);
        } else {
          navigate('/404'); 
        }
      })
      .catch(error => {
        console.error('Error fetching the property:', error);
        navigate('/404'); 
      });
  }, [id, navigate]);
  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="housing-page">
      <Slideshow pictures={property.pictures} />
      <div className="housing-content">
        <div className="housing-content-1">
      <h1 className="housing-title">{property.title}</h1>
      <p className="housing-location">{property.location}</p>
      <div className="tags">
        {property.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <Collapse title="Description" className="housing-collapse">
        {property.description}
      </Collapse>
      </div>
      <div className="housing-content-2">
      <div className="host-info">
        <div className="host-name">{property.host.name}</div>
        <img src={property.host.picture} alt={property.host.name} className="host-picture" />
      </div>
      <HousingRating rating={property.rating} />
      <Collapse title="Equipements" className="housing-collapse">
        <ul>
          {property.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      </Collapse>
      </div>
      </div>
    </div>
  );
}

export default HousingPage;