import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoImg from '../assets/kratosbox-logoprincipal.jpg';
import '../styles/header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinkClass = ({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link';

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={logoImg} alt="KratosBox" className="logo-image" />
          <span className="logo-text">KRATOSBOX</span>
        </Link>

        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menú">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={closeMenu}>Inicio</Link>
          <Link to="/#info" className="nav-link" onClick={closeMenu}>Nosotros</Link>
          <NavLink to="/suscripciones" className={navLinkClass} onClick={closeMenu}>Suscripciones</NavLink>
          <NavLink to="/contacto" className={navLinkClass} onClick={closeMenu}>Contacto</NavLink>
        </nav>

        <Link to="/contacto" className="cta-button" onClick={closeMenu}>
          Quiero Entrenar
        </Link>
      </div>
    </header>
  );
}

export default Header;
