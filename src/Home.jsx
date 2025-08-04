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
          {/* Hero */}
          <section className="hero-section">
            <div className="hero-content">
              <div className="hero-text">
                <h1>Gabriela Castorena Reyes</h1>
                <h2>Ingeniera en Metrología Industrial</h2>
                <p className="hero-description">
                  Especialista en calidad con amplios conocimientos en laboratorio de metrología e industria. Motivada y comprometida a garantizar estándares para el éxito de las organizaciones.
                </p>
                <a className="cta-button" href="mailto:gcastorena75@outlook.com">Contáctame</a>
              </div>
              <div className="hero-image">
                <div className="image-container">
                  <img src={profileImg} alt="Gabriela Castorena" className="profile-img" />
                </div>
              </div>
            </div>
          </section>

          {/* Experiencia Profesional */}
          <section className="section">
            <h2 className="section-title">Experiencia Profesional</h2>
            <div className="services-grid">
              {[
                {
                  title: 'Jiaxipera – Líder de Calidad (2024–2025)',
                  details: `• Auditorías diarias en líneas de producción\n• Inspección incoming, pruebas de laboratorio, análisis de defectos\n• Revisión de documentación de PAPP en líneas nuevas`
                },
                {
                  title: 'DFABRICK – Supervisora de Calidad (2023–2024)',
                  details: `• Coordinación de equipos y validación de producto\n• Reportes, inspecciones y documentación\n• Gestión de recursos humanos y materiales`
                },
                {
                  title: 'Smurfit Kappa – Asistente de Calidad (2021–2022)',
                  details: `• Supervisión de residentes, seguimiento a quejas\n• Control de inventarios y embarques\n• Informes mensuales de scrap`
                },
                {
                  title: 'SANDEN – Técnico Calibrador (2013–2020)',
                  details: `• Calibraciones, pruebas destructivas, mantenimiento\n• Soporte a ingeniería, elaboración de PAPP\n• Capacitaciones y ayudas visuales`
                },
              ].map((job, i) => (
                <div key={i} className="service-card">
                  <h4>{job.title}</h4>
                  <button className="cta-button" onClick={() => toggleModal(i)}>Ver detalles</button>
                  {activeModal === i && (
                    <div className="modal-overlay" onClick={() => toggleModal(i)}>
                      <div className="modal" onClick={e => e.stopPropagation()}>
                        <h4>{job.title}</h4>
                        <pre style={{ whiteSpace: 'pre-wrap' }}>{job.details}</pre>
                        <button onClick={() => toggleModal(i)} className="cta-button">Cerrar</button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Video */}
          <section className="section">
            <h2 className="section-title">Demostración Técnica</h2>
            <p className="section-subtitle">
              Verificación de equipo de atributos (bloques patrón) para calibrar instrumentos como micrómetros, vernier e indicadores de altura.
            </p>
            <video controls width="100%" style={{ maxWidth: '720px', marginTop: '1.5rem', borderRadius: '12px' }}>
              <source src="/img/VideoGabrielaCastorena.mp4" type="video/mp4" />
              Tu navegador no soporta este video.
            </video>
          </section>

          {/* Carrusel */}
          <section className="section">
            <h2 className="section-title">Calibración y TPM</h2>
            <p className="section-subtitle">Calibración de gages de línea y mantenimiento preventivo</p>
            <div className="carousel-container">
              <button className="carousel-button prev" onClick={prevSlide}><FaChevronLeft /></button>
              <div className="carousel-slide">
                <img src={images[currentSlide]} alt={`Gage ${currentSlide + 1}`} className="carousel-img active" />
              </div>
              <button className="carousel-button next" onClick={nextSlide}><FaChevronRight /></button>
              <div className="carousel-dots">
                {images.map((_, index) => (
                  <span key={index} className={`dot ${index === currentSlide ? 'active' : ''}`} onClick={() => setCurrentSlide(index)} />
                ))}
              </div>
            </div>
          </section>

          {/* Pruebas de laboratorio */}
          <section className="section">
            <h2 className="section-title">Pruebas de Laboratorio</h2>
            <p className="section-subtitle">
              Inspección de incoming, pruebas de laboratorio como dureza Rockwell, microdureza Vickers y pruebas de sedimentos.
            </p>
            <div className="carousel">
              {labImages.map((img, idx) => (
                <img key={idx} src={img} alt={`Prueba ${idx + 1}`} className="carousel-img" />
              ))}
            </div>
          </section>

          {/* Contacto */}
          <section className="section">
            <h2 className="section-title">Contacto</h2>
            <p className="section-subtitle">Ponte en contacto directo con Gabriela para cotizar o colaborar</p>
            <div className="contact-grid">
              <div className="contact-info">
                <p><strong>Correo:</strong> gcastorena75@outlook.com</p>
                <p><strong>Teléfono:</strong> 844 807 6422</p>
                <p><strong>Ubicación:</strong> México</p>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default Home;
