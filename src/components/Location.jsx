import React from 'react';
import '../styles/location.css';

function Location() {
  return (
    <section className="location" id="ubicacion">
      <div className="location-container">
        <div className="location-heading">
          <span className="location-eyebrow">Dónde entrenamos</span>
          <h2>Visitá KratosBox</h2>
          <p>
            Estamos en San Justo, con un espacio pensado para entrenar fuerza de verdad y competir con preparación seria.
          </p>
        </div>
        <div className="location-content">
          <div className="location-info">
            <h3>Ubicación</h3>
            <p>Indart 2757, San Justo, Buenos Aires 1754</p>
            <span className="location-note">Zona Oeste, Buenos Aires</span>
            <a
              href="https://www.google.com/maps/search/Indart+2757,+San+Justo,+Buenos+Aires+1754"
              target="_blank"
              rel="noopener noreferrer"
              className="location-link"
            >
              Abrir en Google Maps
            </a>
          </div>
          <div className="location-map">
            <iframe
              title="Ubicación KratosBox"
              src="https://maps.google.com/maps?q=Indart+2757,+San+Justo,+Buenos+Aires+1754&t=&z=15&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
