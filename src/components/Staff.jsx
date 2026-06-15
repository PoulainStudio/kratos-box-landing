import React from 'react';
import '../styles/staff.css';

function Staff() {
  const coaches = [
    {
      id: 1,
      name: 'Dante',
      role: 'Head Coach',
      credential: 'Profesor de Educacion Fisica especializado en fuerza y powerlifting competitivo',
      description: 'Fundador de KratosBox y responsable de la vision deportiva del gimnasio. Diseña la periodizacion general, corrige la tecnica fina de sentadilla, banca y peso muerto, y trabaja con atletas que buscan construir fuerza real o prepararse para competir.',
      specialties: ['Periodizacion', 'Tecnica avanzada', 'Preparacion competitiva'],
      image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=realistic%20portrait%20of%20a%20male%20Argentine%20head%20strength%20coach%20inside%20a%20premium%20powerlifting%20gym%2C%20black%20and%20burgundy%20lighting%2C%20athletic%20build%2C%20professional%20sports%20photography%2C%20trophies%20in%20background&image_size=portrait_4_3'
    },
    {
      id: 2,
      name: 'Enzo',
      role: 'Coach de Fuerza',
      credential: 'Profesor de Educacion Fisica orientado a progresiones de fuerza y desarrollo fisico',
      description: 'Se enfoca en construir bases solidas para alumnos que quieren aprender a entrenar bien desde el primer dia. Ordena progresiones, mejora la eficiencia de movimiento y acompana el desarrollo de potencia, estabilidad y confianza bajo la barra.',
      specialties: ['Base tecnica', 'Progresiones', 'Desarrollo de potencia'],
      image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=realistic%20portrait%20of%20a%20male%20strength%20coach%20in%20a%20modern%20powerlifting%20gym%2C%20premium%20black%20and%20burgundy%20aesthetic%2C%20sportswear%2C%20confident%20professional%20pose%2C%20cinematic%20fitness%20photography&image_size=portrait_4_3'
    },
    {
      id: 3,
      name: 'Seba',
      role: 'Coach de Powerlifting',
      credential: 'Profesor de Educacion Fisica dedicado al rendimiento tecnico y la puesta a punto',
      description: 'Trabaja sobre el detalle que marca la diferencia: posicion inicial, tempo, estabilidad, lectura del intento y ajuste de cargas. Su rol es transformar buen esfuerzo en levantamientos cada vez mas eficientes, consistentes y competitivos.',
      specialties: ['Ajuste tecnico', 'Puesta a punto', 'Lectura de competencia'],
      image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=realistic%20portrait%20of%20a%20male%20powerlifting%20coach%20inside%20an%20elite%20strength%20gym%2C%20dark%20premium%20interior%2C%20burgundy%20accents%2C%20focused%20expression%2C%20professional%20editorial%20fitness%20photo&image_size=portrait_4_3'
    }
  ];

  return (
    <section className="staff" id="staff">
      <div className="staff-container">
        <h2>NUESTRO <span className="accent">STAFF</span></h2>

        <div className="staff-grid">
          {coaches.map(coach => (
            <div key={coach.id} className="staff-card">
              <div className="staff-image">
                <img src={coach.image} alt={coach.name} />
              </div>
              <div className="staff-info">
                <span className="staff-badge">{coach.role}</span>
                <h3>{coach.name}</h3>
                <p className="role">{coach.credential}</p>
                <p className="description">{coach.description}</p>
                <ul className="staff-specialties">
                  {coach.specialties.map((specialty) => (
                    <li key={specialty}>{specialty}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Staff;
