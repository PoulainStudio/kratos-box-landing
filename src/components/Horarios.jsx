import React from 'react';
import '../styles/horarios.css';

function Horarios() {
  return (
    <section className="horarios" id="horarios">
      <div className="horarios-container">
        <h2>HORARIOS DE BATALLA</h2>
        
        <div className="schedule-grid">
          <div className="schedule-item">
            <h3>Lunes a Viernes</h3>
            <p className="time">7:30hs - 22:00hs</p>
          </div>
          <div className="schedule-item">
            <h3>Sábados</h3>
            <p className="time">9:00hs - 12:00hs</p>
          </div>
        </div>

        <p className="schedule-note">Estamos listos para recibirte. Trae tu determinación y el equipo hará el resto.</p>
      </div>
    </section>
  );
}

export default Horarios;
