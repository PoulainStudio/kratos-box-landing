import React from 'react';
import Contact from '../components/Contact';
import '../styles/pages.css';

function ContactPage() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Contacto</h1>
        <p>
          Escribinos para recibir informacion sobre planes, metodologia de entrenamiento y el mejor punto de partida segun tu objetivo.
        </p>
      </div>
      <Contact />
    </div>
  );
}

export default ContactPage;
