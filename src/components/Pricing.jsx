import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pricing.css';

function Pricing() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="pricing" id="pricing">
      <div className="pricing-container">
        <h2>ELEGÍ TU <span className="accent">PLAN</span></h2>
        <p className="pricing-intro">
          Tres formas de entrenar en KratosBox, una misma exigencia: progresar con método, técnica y constancia.
        </p>

        <div className="pricing-grid">
          {/* Card 1: GYM PERSONALIZADO */}
          <div className="pricing-card">
            <div className="card-header">
              <h3>GYM PERSONALIZADO</h3>
              <div className="price">$60.000<span>/mes</span></div>
            </div>
            
            <ul className="features">
              <li>Venís las veces que quieras.</li>
              <li>Rutina personalizada del día a día.</li>
              <li>El profe te la arma según tu entrenamiento.</li>
              <li>Apto para principiantes y avanzados.</li>
              <li>Seguimiento simple, práctico y adaptado a vos.</li>
            </ul>

            <Link to="/contacto" className="select-button">
              Seleccionar Plan
            </Link>
          </div>

          {/* Card 2: PASE LIBRE */}
          <div className="pricing-card">
            <div className="card-header">
              <h3>PASE LIBRE</h3>
              <div className="price">$70.000<span>/mes</span></div>
            </div>
            
            <ul className="features">
              <li>Entrená libre con tu rutina y tu seguimiento.</li>
              <li>Acceso ilimitado al gimnasio.</li>
              <li>Discos y barras de competencia.</li>
              <li>Espacio especializado en fuerza.</li>
              <li>Apto para avanzados y con experiencia. Ideal si ya tenés entrenador o rutina propia.</li>
            </ul>

            <Link to="/contacto" className="select-button">
              Seleccionar Plan
            </Link>
          </div>

          {/* Card 3: COACHING FULL [RECOMENDADO] */}
          <div className="pricing-card premium">
            <div className="premium-badge">RECOMENDADO</div>
            
            <div className="card-header">
              <h3>COACHING FULL</h3>
              <div className="price">$80.000<span>/mes</span></div>
            </div>
            
            <ul className="features">
              <li>Entrenamiento 100% personalizado y seguimiento profundo.</li>
              <li>Método Kratos.</li>
              <li>Plan pensado según tus objetivos.</li>
              <li>Corrección técnica constante.</li>
              <li>Seguimiento detallado y evolución real.</li>
              <li>Elegís con qué entrenador de Kratos querés trabajar.</li>
              <li>Apto para principiantes y avanzados. Ideal si querés resultados serios y un proceso completo.</li>
            </ul>

            <button
              className="method-button"
              onClick={() => setShowModal(true)}
            >
              ¿Qué es el Método Kratos?
            </button>

            <Link to="/contacto" className="select-button">
              Seleccionar Plan
            </Link>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setShowModal(false)}>✕</button>
            
            <h2>MÉTODO <span className="accent">KRATOS</span></h2>
            
            <div className="modal-body">
              <div className="method-step">
                <div className="step-number">1</div>
                <div>
                  <h3>Plantear un Objetivo Claro</h3>
                  <p>Definimos metas concretas según tu nivel, tus marcas actuales y el tipo de atleta que querés construir.</p>
                </div>
              </div>

              <div className="method-step">
                <div className="step-number">2</div>
                <div>
                  <h3>Estructurar la Organización Total</h3>
                  <p>Ordenamos entrenamiento, volumen, intensidad, recuperación y hábitos para que cada fase tenga un propósito real.</p>
                </div>
              </div>

              <div className="method-step">
                <div className="step-number">3</div>
                <div>
                  <h3>Disciplina Espartana en la Ejecución</h3>
                  <p>Ejecutás con rigor y seguimiento técnico constante. El plan se adapta a tu progreso sin perder la exigencia del proceso.</p>
                </div>
              </div>
            </div>

            <button className="modal-cta" onClick={() => setShowModal(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Pricing;
