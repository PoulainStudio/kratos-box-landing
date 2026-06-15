import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/hero.css';

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <span className="hero-kicker">Zona Oeste. Powerlifting. Fuerza real.</span>
        <h1 className="hero-title">ENTRENÁ EN EL TEMPLO DE LA <span className="accent">FUERZA</span></h1>
        <p className="hero-subtitle">
          Barras pesadas, técnica precisa y una atmósfera hecha para levantar serio. KratosBox no busca motivarte con frases vacías: te prepara para rendir.
        </p>
        <div className="hero-actions">
          <Link to="/suscripciones" className="hero-cta">
            Ver Suscripciones
          </Link>
          <Link to="/contacto" className="hero-secondary-cta">
            Hablar Con El Staff
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
