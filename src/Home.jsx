// src/Home.jsx
import './App.css';
import { useEffect, useState } from 'react';
import profileImg from '/img/Gabriela-perfil.jpg';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Home() {
  const [showContent, setShowContent] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeModal, setActiveModal] = useState(null);

  const images = [
    "/img/carusel1.jpg",
    "/img/carrusel2.jpg",
    "/img/carrusel3.jpg"
  ];

  const labImages = [
    "/img/pruebas1.jpg",
    "/img/pruebas2.jpg"
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const nextSlide = () => setCurrentSlide(prev => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide(prev => (prev === 0 ? images.length - 1 : prev - 1));

  const toggleModal = (key) => setActiveModal(activeModal === key ? null : key);

  return (
    <div className="home-screen">
      {!showContent ? (
        <div className="centered-content">
          <h1 className="animated-text">SystemVkode - Desarrollo de software web</h1>
          <p className="contact">Contacto: <strong>844 178 6280</strong></p>
        </div>
      ) : (
        <div className="container fade-in">
          <section className="hero-section">
            <div className="hero-content">
              <div className="hero-text">
                <h1>GABRIELA CASTORENA REYES</h1>
                <h2>CEL. 8448076422 | CORREO: gcastorena75@outlook.com</h2>
                <p className="hero-description">
                  Especialista en departamento de calidad con amplios conocimientos en laboratorio de metrología e industria y un sólido compromiso con el cumplimiento de estándares. Soy una persona con motivación y ansias de desarrollo profesional. Deseo aportar mis destrezas a una nueva empresa para garantizar el cumplimiento de los estándares y el éxito de la organización.
                </p>
              </div>
              <div className="hero-image">
                <div className="image-container">
                  <img src={profileImg} alt="Gabriela Castorena" className="profile-img" />
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Habilidades</h2>
            <p className="section-subtitle">
              • Comunicación efectiva • Trabajo en equipo • Organizada y responsable • Adaptabilidad • Pensamiento crítico y sentido de urgencia • Creativa
            </p>
          </section>

          <section className="section">
            <h2 className="section-title">Estudios</h2>
            <p className="section-subtitle">
              Universidad Politécnica de Ramos Arizpe<br />
              Ingeniero en Metrología Industrial
            </p>
            <p className="section-subtitle">
              Formación complementaria:<br />
              • Curso de Core Tools<br />
              • Excel Básico-Intermedio<br />
              • Curso Six Sigma<br />
              • Curso básico de GD&T
            </p>
          </section>

          {/* Experiencia Profesional */}
          <section className="section">
            <h2 className="section-title">Experiencia Profesional</h2>
            <div className="services-grid">
              {["Jiaxipera – Líder de Calidad (2024–2025)",
                "DFABRICK – Supervisora de Calidad (2023–2024)",
                "Smurfit Kappa – Asistente de Calidad (2021–2022)",
                "SANDEN – Técnico Calibrador (2013–2020)"
              ].map((job, i) => (
                <div key={i} className="service-card">
                  <h4>{job}</h4>
                  <button className="cta-button" onClick={() => toggleModal(i)}>Ver detalles</button>
                  {activeModal === i && (
                    <div className="modal-overlay" onClick={() => toggleModal(i)}>
                      <div className="modal" onClick={e => e.stopPropagation()}>
                        <h4>{job}</h4>
                        <pre style={{ whiteSpace: 'pre-wrap' }}>
                          {i === 0 && `• Supervisión del cumplimiento de los estándares de calidad por medio de auditorias diarias en líneas.
• Realización de inspección incoming, pruebas de laboratorio y análisis de defectos detectados en procesos.
• Revisión y aprobación de documentación perteneciente a protocolos e informes de estudios de PAPP de líneas nuevas.`}
                          {i === 1 && `• Supervisión de los equipos de trabajo para garantizar cumplimiento de normas del cliente.
• Redacción de informes y notificación de observaciones o incidencias.
• Coordinación de personal, capacitación, validación de producto y solución de problemas técnicos.`}
                          {i === 2 && `• Supervisión de residentes en planta cliente.
• Seguimiento a quejas, normas y estándares de producto.
• Inventarios, liberación de embarques e informes de scrap.`}
                          {i === 3 && `• Administración MSA, calibraciones, mantenimiento y pruebas destructivas.
• Elaboración de ayudas visuales, capacitaciones.
• Soporte a ingeniería y documentación de PAPP.`}
                        </pre>
                        <button onClick={() => toggleModal(i)} className="cta-button">Cerrar</button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Secciones restantes se mantienen igual */}
        </div>
      )}
    </div>
  );
}

export default Home;
