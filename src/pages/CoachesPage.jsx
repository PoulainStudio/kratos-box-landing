import React from 'react';
import Staff from '../components/Staff';
import '../styles/pages.css';

function CoachesPage() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Nuestros Coaches</h1>
        <p>
          Un equipo de Profesores de Educacion Fisica especializado en fuerza y powerlifting, con roles definidos para acompanar desde la base tecnica hasta la preparacion competitiva.
        </p>
      </div>
      <Staff />
    </div>
  );
}

export default CoachesPage;
