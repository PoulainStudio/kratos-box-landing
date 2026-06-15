import React, { useState } from 'react';
import '../styles/contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const nextErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9+\-\s()]{8,}$/;

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      nextErrors.name = 'Ingresá un nombre valido.';
    }

    if (!emailRegex.test(formData.email.trim())) {
      nextErrors.email = 'Ingresá un email valido.';
    }

    if (formData.phone.trim() && !phoneRegex.test(formData.phone.trim())) {
      nextErrors.phone = 'Ingresá un telefono valido o dejalo vacio.';
    }

    if (!formData.plan) {
      nextErrors.plan = 'Seleccioná el plan que te interesa.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 15) {
      nextErrors.message = 'Contanos un poco mas sobre tu objetivo.';
    }

    return nextErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setErrors({});
      setFormData({
        name: '',
        email: '',
        phone: '',
        plan: '',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 3000);
      return;
    }

    setSubmitted(false);
    setErrors(validationErrors);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <span className="contact-eyebrow">Contacto</span>
          <h2>ACEPTÁ EL RETO. CONTACTANOS.</h2>
          <p>
            Dejanos tus datos y tu objetivo. Te respondemos para orientarte sobre el plan, la metodologia y la mejor forma de empezar en KratosBox.
          </p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-form-section">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && <span className="field-error">{errors.name}</span>}
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Tu email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Tu telefono (opcional)"
                  value={formData.phone}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.phone)}
                />
                {errors.phone && <span className="field-error">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <select
                  name="plan"
                  value={formData.plan}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.plan)}
                >
                  <option value="">Elegí un plan de interes</option>
                  <option value="estandar">Plan Estandar</option>
                  <option value="metodo-kratos">Plan Metodo Kratos</option>
                </select>
                {errors.plan && <span className="field-error">{errors.plan}</span>}
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Contanos tu objetivo, experiencia y disponibilidad"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                ></textarea>
                {errors.message && <span className="field-error">{errors.message}</span>}
              </div>

              <button type="submit" className="submit-button">Enviar Mensaje</button>

              {submitted && (
                <div className="success-message">
                  Mensaje enviado con exito. KratosBox te va a responder pronto.
                </div>
              )}
            </form>
          </div>

          <div className="contact-info-section">
            <div className="info-box">
              <h3>Canales del gimnasio</h3>

              <div className="info-item">
                <span className="label">Email:</span>
                <a href="mailto:info@kratosbox.com">info@kratosbox.com</a>
              </div>

              <div className="info-item">
                <span className="label">Instagram:</span>
                <a href="https://instagram.com/kratosbox" target="_blank" rel="noopener noreferrer">
                  @kratosbox
                </a>
              </div>

              <div className="info-item">
                <span className="label">Dirección:</span>
                <p>Indart 2757<br />San Justo, Buenos Aires 1754</p>
              </div>

              <div className="contact-highlight">
                <h4>Ideal para consultas sobre:</h4>
                <p>Inicio en powerlifting, evaluacion tecnica, seguimiento personalizado y preparacion para competir.</p>
              </div>

              <div className="social-links">
                <h4>Seguinos</h4>
                <a href="https://instagram.com/kratosbox" target="_blank" rel="noopener noreferrer" className="social-icon">
                  Instagram
                </a>
                <a
                  href="https://www.google.com/maps/search/Indart+2757,+San+Justo,+Buenos+Aires+1754"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon secondary"
                >
                  Ver ubicacion
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
