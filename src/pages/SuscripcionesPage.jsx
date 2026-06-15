import React from 'react';
import Pricing from '../components/Pricing';
import Staff from '../components/Staff';
import '../styles/pages.css';

function SuscripcionesPage() {
  return (
    <div className="page">
      <div className="page-header page-header-heavy">
        <span className="page-eyebrow">Planes y staff</span>
        <h1>
          ELEGÍ TU <span className="accent-text">MÉTODO</span>
        </h1>
        <p>
          Primero ves cómo entrenás. Después, quién te lleva al siguiente nivel. Planes y coaches conviven en una misma ruta para justificar el valor desde el primer scroll.
        </p>
      </div>
      <Pricing />
      <Staff />
    </div>
  );
}

export default SuscripcionesPage;
