import React from 'react';
import Gallery from '../components/Gallery';
import OverlayImage from '../components/OverlayImage';
import Img1 from '../images/img-homepage.png';
import '../style/HomePage.css';


function HomePage()  {
  return ( 
    <div className='homepage-content'>
<OverlayImage src={Img1} alt="Accueil" text="Chez vous, partout et ailleurs" darken/>
<Gallery />
    </div>
  )
}

export default HomePage;