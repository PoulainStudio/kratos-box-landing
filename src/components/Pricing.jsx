import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pricing.css';

function Pricing() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="pricing" id="pricing">
      <div className="pricing-container">
        <h2>ELEGÍ TU SISTEMA DE ENTRENAMIENTO</h2>
        <p className="pricing-intro">
          Dos formas de entrenar en KratosBox, una misma exigencia: progresar con método, técnica y constancia.
        </p>

        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="card-header">
              <h3>Plan Estándar</h3>
              <div className="price">$60.000<span>/mes</span></div>
            </div>
            
            <ul className="features">
              <li>✓ Acceso completo al gimnasio</li>
              <li>✓ Uso de equipamiento de competición</li>
              <li>✓ Planificación general para fuerza</li>
              <li>✓ Acompañamiento en el entorno de entrenamiento</li>
            </ul>

            <Link to="/contacto" className="select-button">
              Seleccionar
            </Link>
          </div>

          <div className="pricing-card premium">
            <div className="premium-badge">RECOMENDADO</div>
            
            <div className="card-header">
              <h3>Plan Método Kratos</h3>
              <div className="price">$80.000<span>/mes</span></div>
            </div>
            
            <ul className="features">
              <li>✓ Acceso completo al gimnasio</li>
              <li>✓ Uso de equipamiento de competición</li>
              <li>✓ Planificación personalizada de fuerza</li>
              <li>✓ Seguimiento técnico avanzado</li>
              <li>✓ Ajuste de cargas según progreso</li>
              <li>✓ Estrategia de competencia y picos de rendimiento</li>
              <li>✓ Nutrición orientada al rendimiento (opcional)</li>
            </ul>

            <button
              className="method-button"
              onClick={() => setShowModal(true)}
            >
              ¿Qué es el Método Kratos?
            </button>

            <Link to="/contacto" className="select-button">
              Seleccionar
            </Link>
          </div>
        </div>

        <div className="pricing-cta">
          <p className="pricing-cta-text">
            Querés conocer quién va a acompañarte en el proceso, corregir tu técnica y llevar tu progreso al siguiente nivel.
          </p>
          <Link to="/coaches" className="coaches-cta-button">
            Conocé a nuestros Coaches
          </Link>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setShowModal(false)}>✕</button>
            
            <h2>¿Qué es el Método Kratos?</h2>
            
            <div className="modal-body">
              <div className="method-step">
                <div className="step-number">1</div>
                <h3>Plantear un Objetivo Claro</h3>
                <p>Definimos metas concretas según tu nivel, tus marcas actuales y el tipo de atleta que querés construir.</p>
              </div>

              <div className="method-step">
                <div className="step-number">2</div>
                <h3>Estructurar la Organización Total</h3>
                <p>Ordenamos entrenamiento, volumen, intensidad, recuperación y hábitos para que cada fase tenga un propósito real.</p>
              </div>

              <div className="method-step">
                <div className="step-number">3</div>
                <h3>Disciplina Espartana en la Ejecución</h3>
                <p>Ejecutás con rigor y seguimiento técnico constante. El plan se adapta a tu progreso sin perder la exigencia del proceso.</p>
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
