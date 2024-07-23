import React from 'react';
import { useParams } from 'react-router-dom';

function HousingPage() {
  const { id } = useParams();
  return <h1>Housing Page for property {id}</h1>;
}

export default HousingPage;
