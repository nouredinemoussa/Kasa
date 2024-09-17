import React from 'react';
import { Link,useLocation } from 'react-router-dom';
import '../style/Header.css';
import KasaLogo from '../images/kasa-logo.png'

function Header() {

    const location = useLocation();
    const currentPath = location.pathname;
    
    return (
      <header className="header">
        <div className="logo">
          <img src={KasaLogo} alt="Logo Kasa" />
        </div>
        <nav className="nav-links">
          <Link to="/" className={currentPath === '/' ? 'active' : ''}>Accueil</Link>
          <Link to="/about" className={currentPath === '/about' ? 'active' : ''}>A propos</Link>
        </nav>
      </header>
    );
  }
  
  export default Header;