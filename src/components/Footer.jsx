import React from 'react';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <span className="helmet-icon">⚔️</span>
          <span>KRATOSBOX</span>
        </div>

        <p className="footer-text">© 2026 KratosBox. Forjado en Zona Oeste.</p>

        <p className="footer-credit">Diseñado por PoulainStudio</p>
      </div>
    </footer>
  );
}

export default Footer;
