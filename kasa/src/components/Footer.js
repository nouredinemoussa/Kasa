import React from 'react';
import '../style/Footer.css';
import FooterLogo from '../images/footer-logo.png';  // 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={FooterLogo} alt="Logo" />
      </div>
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;