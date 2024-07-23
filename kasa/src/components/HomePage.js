import React from 'react';
import OverlayImage from './OverlayImage';
import Img1 from './/img-homepage.png';
import './/HomePage.css';
import Gallery from './Gallery';

function HomePage()  {
  return ( 
    <div className='homepage-content'>
<OverlayImage src={Img1} alt="Accueil" text="Chez vous, partout et ailleurs" darken/>
<Gallery />
    </div>
  )
}

export default HomePage;