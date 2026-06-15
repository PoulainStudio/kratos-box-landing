import React, { useState } from 'react';
import '../styles/pricing.css';

function Pricing() {
  const [showModal, setShowModal] = useState(false);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pricing" id="pricing">
      <div className="pricing-container">
        <h2>ELEGÍ TU SISTEMA DE ENTRENAMIENTO</h2>

        <div className="pricing-grid">
          {/* Plan Estándar */}
          <div className="pricing-card">
            <div className="card-header">
              <h3>Plan Estándar</h3>
              <div className="price">$60.000<span>/mes</span></div>
            </div>
            
            <ul className="features">
              <li>✓ Acceso completo al gimnasio</li>
              <li>✓ Uso de equipamiento de competición</li>
              <li>✓ Planificación general básica</li>
            </ul>

            <button 
              className="select-button"
              onClick={handleScrollToContact}
            >
              Seleccionar
            </button>
          </div>

          {/* Plan Método Kratos */}
          <div className="pricing-card premium">
            <div className="premium-badge">RECOMENDADO</div>
            
            <div className="card-header">
              <h3>Plan Método Kratos</h3>
              <div className="price">$80.000<span>/mes</span></div>
            </div>
            
            <ul className="features">
              <li>✓ Acceso completo al gimnasio</li>
              <li>✓ Uso de equipamiento de competición</li>
              <li>✓ Planificación general básica</li>
              <li>✓ Planificación personalizada de Powerlifting/Fuerza</li>
              <li>✓ Seguimiento técnico avanzado</li>
              <li>✓ Nutrición orientada al rendimiento (opcional)</li>
            </ul>

            <button 
              className="method-button"
              onClick={() => setShowModal(true)}
            >
              [¿Qué es el Método Kratos?]
            </button>

            <button 
              className="select-button"
              onClick={handleScrollToContact}
            >
              Seleccionar
            </button>
          </div>
        </div>
      </div>

      {/* Modal Método Kratos */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setShowModal(false)}>✕</button>
            
            <h2>¿Qué es el Método Kratos?</h2>
            
            <div className="modal-body">
              <div className="method-step">
                <div className="step-number">1</div>
                <h3>Plantear un Objetivo Claro</h3>
                <p>Establecemos metas específicas y medibles basadas en tu nivel actual y ambiciones en el powerlifting.</p>
              </div>

              <div className="method-step">
                <div className="step-number">2</div>
                <h3>Estructurar la Organización Total</h3>
                <p>Diseñamos un programa integral que abarca entrenamiento periodizado, nutrición estratégica y recuperación óptima.</p>
              </div>

              <div className="method-step">
                <div className="step-number">3</div>
                <h3>Disciplina Espartana en la Ejecución</h3>
                <p>Trabaja con rigor total. Nuestros coaches te acompañan en cada sesión asegurando técnica perfecta y máximo rendimiento.</p>
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
