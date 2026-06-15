import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Link to="/" className="footer-logo">
          <img src="/kratos.png" alt="KratosBox" className="footer-logo-image" />
          <span>KRATOSBOX</span>
        </Link>

        <p className="footer-text">© 2026 KratosBox. Forjado en Zona Oeste.</p>

        <p className="footer-credit">Diseñado por PoulainStudio</p>
      </div>
    </footer>
  );
}

export default Footer;
