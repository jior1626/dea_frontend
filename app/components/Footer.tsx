//Footer.tsx
import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-column">
        <img src="https://nivel99.com/desfibriladores/alcaldiaFooter.png" width="35" height="35" />
      </div>
      <div className="footer-column">
        <p>Alcaldía de Medellín</p>
      </div>
      <div className="footer-column">
      <img src="https://nivel99.com/desfibriladores/marcacolombia.png" width="35" height="35" />
      </div>
      <div className="footer-column">
      <img src="https://nivel99.com/desfibriladores/logofinal_gov.png" width="120" height="35" />
      </div>
    </footer>
  );
};

export default Footer;
