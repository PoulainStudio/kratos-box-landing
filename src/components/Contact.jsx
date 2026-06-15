import React, { useState } from 'react';
import '../styles/contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>ACEPTÁ EL RETO. CONTACTANOS.</h2>

        <div className="contact-wrapper">
          {/* Formulario */}
          <div className="contact-form-section">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Tu email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Tu mensaje"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">Enviar Mensaje</button>
              
              {submitted && (
                <div className="success-message">
                  ✓ Mensaje enviado con éxito. Nos contactaremos pronto.
                </div>
              )}
            </form>
          </div>

          {/* Información de contacto */}
          <div className="contact-info-section">
            <div className="info-box">
              <h3>Información de Contacto</h3>
              
              <div className="info-item">
                <span className="label">Email:</span>
                <a href="mailto:info@kratosbox.com">info@kratosbox.com</a>
              </div>

              <div className="info-item">
                <span className="label">Teléfono:</span>
                <a href="tel:+541234567890">+54 11 1234-5678</a>
              </div>

              <div className="info-item">
                <span className="label">Dirección:</span>
                <p>Indart 2757<br />San Justo, Buenos Aires 1754</p>
              </div>

              <div className="social-links">
                <h4>Síguenos</h4>
                <a href="https://instagram.com/kratosbox" target="_blank" rel="noopener noreferrer" className="social-icon">
                  📱 Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
