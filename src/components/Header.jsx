import React, { useState } from 'react';
import '../styles/header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <div className="spartan-helmet">⚔️</div>
          <span className="logo-text">KRATOSBOX</span>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <a href="#inicio" onClick={(e) => handleSmoothScroll(e, 'hero')}>Inicio</a>
          <a href="#nosotros" onClick={(e) => handleSmoothScroll(e, 'info')}>Nosotros</a>
          <a href="#precios" onClick={(e) => handleSmoothScroll(e, 'pricing')}>Precios</a>
          <a href="#staff" onClick={(e) => handleSmoothScroll(e, 'staff')}>Staff</a>
          <a href="#contacto" onClick={(e) => handleSmoothScroll(e, 'contact')}>Contacto</a>
        </nav>

        <button 
          className="cta-button"
          onClick={() => handleSmoothScroll({ preventDefault: () => {} }, 'contact')}
        >
          Inscribirme
        </button>
      </div>
    </header>
  );
}

export default Header;
