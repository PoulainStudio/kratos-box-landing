import React from 'react';
import '../styles/info.css';

function Info() {
  return (
    <section className="info" id="info">
      <div className="info-container">
        <h2>QUIÉNES SOMOS</h2>

        <div className="info-grid">
          <div className="info-item">
            <div className="info-icon">⚡</div>
            <h3>Entrenamiento de Fuerza Intenso</h3>
            <p>Programas diseñados para desarrollar fuerza real, técnica sólida y rendimiento sostenido en sentadilla, press de banca y peso muerto.</p>
          </div>

          <div className="info-item">
            <div className="info-icon">🏆</div>
            <h3>Expertos Certificados en Powerlifting Argentino</h3>
            <p>Nuestros coaches son Profesores de Educación Física con especialización en entrenamiento de fuerza y preparación específica para powerlifting.</p>
          </div>

          <div className="info-item">
            <div className="info-icon">🔥</div>
            <h3>Comunidad y Ambiente de Superación</h3>
            <p>Entrenás rodeado de atletas que entienden el valor de la constancia, el trabajo bien hecho y el progreso construido sesión tras sesión.</p>
          </div>
        </div>

        <div className="founder-story">
          <div className="founder-story-header">
            <span className="founder-label">Head Coach</span>
            <h3>Mi Historia, por Dante</h3>
          </div>
          <div className="founder-story-body">
            <p>
              Empecé entrenando a mis amigos más cercanos en un espacio chico. No había nada de sobra: una barra, algunos discos, mucha energía y la convicción de que entrenar fuerza en serio podía cambiar la cabeza y el cuerpo de una persona.
            </p>
            <p>
              Con el tiempo, esa pasión por la fuerza se convirtió en lo que es hoy: un gimnasio especializado, lleno de trofeos y medallas de powerlifting, donde se forjan atletas reales. KratosBox creció a base de disciplina, técnica y horas de trabajo, y cada logro que ves adentro representa el proceso de alguien que decidió tomarse en serio su evolución.
            </p>
            <blockquote className="founder-advice">
              Mi consejo para vos es simple: si querés resultados de verdad, entrená con disciplina, respetá cada etapa y dejá de buscar atajos. La fuerza se construye cuando aprendés a cumplir incluso los días en los que no tenés ganas.
            </blockquote>
            <cite>— Dante, Head Coach</cite>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
