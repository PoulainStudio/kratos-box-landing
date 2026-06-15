import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/hero.css';

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">KRATOS <span className="accent-text">BOX</span></h1>
        <p className="hero-subtitle">Powerlifting. Fuerza Bruta. Resultados Irrebatibles.</p>
        <Link to="/suscripciones" className="hero-cta">
          EMPEZÁ AHORA
        </Link>
      </div>
    </section>
  );
}

export default Hero;
