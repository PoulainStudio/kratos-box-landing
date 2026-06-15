import React from 'react';
import '../styles/staff.css';

function Staff() {
  const coaches = [
    {
      id: 1,
      name: 'Dante',
      role: 'Head Coach',
      description: 'Profesor de Educación Física especializado en Fuerza y Powerlifting. Experto en periodización y técnica de levantamiento.',
      image: 'https://via.placeholder.com/300x400?text=Dante'
    },
    {
      id: 2,
      name: 'Enzo',
      role: 'Coach de Fuerza',
      description: 'Profesor de Educación Física con enfoque en desarrollo de potencia y condicionamiento. Certificado en powerlifting competitivo.',
      image: 'https://via.placeholder.com/300x400?text=Enzo'
    },
    {
      id: 3,
      name: 'Seba',
      role: 'Coach de Powerlifting',
      description: 'Profesor de Educación Física especialista en los tres levantamientos olímpicos. Guía técnica precisa y seguimiento personalizado.',
      image: 'https://via.placeholder.com/300x400?text=Seba'
    }
  ];

  return (
    <section className="staff" id="staff">
      <div className="staff-container">
        <h2>NUESTROS HEAD COACHES</h2>

        <div className="staff-grid">
          {coaches.map(coach => (
            <div key={coach.id} className="staff-card">
              <div className="staff-image">
                <img src={coach.image} alt={coach.name} />
              </div>
              <div className="staff-info">
                <h3>{coach.name}</h3>
                <p className="role">{coach.role}</p>
                <p className="description">{coach.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Staff;
