import React from 'react';
import '../styles/info.css';

function Info() {
  return (
    <section className="info" id="info">
      <div className="info-container">
        <h2>QUIÉNES SOMOS</h2>
        
        <div className="info-grid">
          <div className="info-item">
            <div className="info-icon">⚡</div>
            <h3>Entrenamiento de Fuerza Intenso</h3>
            <p>Programas diseñados específicamente para maximizar tu potencia y fuerza en los tres levantamientos olímpicos del powerlifting.</p>
          </div>

          <div className="info-item">
            <div className="info-icon">🏆</div>
            <h3>Expertos Certificados en Powerlifting Argentino</h3>
            <p>Nuestros coaches cuentan con certificación profesional en Educación Física y especialización en entrenamiento de fuerza y powerlifting.</p>
          </div>

          <div className="info-item">
            <div className="info-icon">🔥</div>
            <h3>Comunidad y Ambiente de Superación</h3>
            <p>Forma parte de una comunidad de atletas comprometidos con su desarrollo. Un ambiente donde la disciplina espartana es el estándar.</p>
          </div>
        </div>

        <div className="info-location">
          <h3>📍 Ubicación</h3>
          <p>Indart 2757, San Justo, Buenos Aires 1754</p>
          <a href="https://www.google.com/maps/search/Indart+2757,+San+Justo,+Buenos+Aires+1754" target="_blank" rel="noopener noreferrer" className="maps-link">
            Ver en Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}

export default Info;
