import React from 'react';
import '../styles/hero.css';

function Hero() {
  const handleScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1 className="hero-title">FORJA TU FUERZA.<br />DOMINA EL POWERLIFTING.</h1>
        <p className="hero-subtitle">El mejor gym de zona oeste. Entrenamiento real para resultados reales.</p>
        <button 
          className="hero-cta"
          onClick={() => handleScroll('pricing')}
        >
          Ver Planes
        </button>
      </div>
    </section>
  );
}

export default Hero;
