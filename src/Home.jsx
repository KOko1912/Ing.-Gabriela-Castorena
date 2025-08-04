import { useEffect, useState } from 'react';
import './App.css';
import profileImg from '/img/Gabriela-perfil.jpg';
import { FaChevronLeft, FaChevronRight, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaCertificate } from 'react-icons/fa';
import { MdEngineering, MdScience, MdPrecisionManufacturing } from 'react-icons/md';

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
    const timer = setTimeout(() => setShowContent(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const nextSlide = () => setCurrentSlide(prev => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide(prev => (prev === 0 ? images.length - 1 : prev - 1));

  const toggleModal = (key) => setActiveModal(activeModal === key ? null : key);

  return (
    <div className="home-screen">
      {!showContent ? (
        <div className="splash-screen">
          <div className="splash-content">
            <div className="logo-animation">
              <span className="logo-part">System</span>
              <span className="logo-highlight">V</span>
              <span className="logo-part">kode</span>
            </div>
            <h2 className="splash-subtitle">Desarrollo de software web a medida</h2>
            <div className="splash-contact">
              <p>Contacto: <strong>844 178 6280</strong></p>
              <div className="loading-bar"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          {/* Hero Section */}
          <section className="hero-section">
            <div className="hero-content">
              <div className="hero-text">
                <div className="professional-tag">Ingeniera en Metrología Industrial</div>
                <h1>Gabriela Castorena Reyes</h1>
                <p className="hero-description">
                  Especialista en calidad con más de 10 años de experiencia en laboratorios de metrología e industria. 
                  Comprometida con la excelencia y la implementación de los más altos estándares de calidad.
                </p>
                <div className="hero-cta">
                  <a className="cta-button primary" href="mailto:gcastorena75@outlook.com">
                    <FaEnvelope /> Contáctame
                  </a>
                  <a className="cta-button secondary" href="#contacto">
                    <FaPhone /> Más información
                  </a>
                </div>
                <div className="expertise-tags">
                  <span><MdEngineering /> Metrología</span>
                  <span><MdScience /> Control de Calidad</span>
                  <span><MdPrecisionManufacturing /> Procesos Industriales</span>
                </div>
              </div>
              <div className="hero-image">
                <div className="image-container">
                  <img src={profileImg} alt="Gabriela Castorena" className="profile-img" />
                  <div className="image-decoration"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Experiencia Profesional */}
          <section className="section" id="experiencia">
            <div className="section-header">
              <h2 className="section-title">Experiencia Profesional</h2>
              <p className="section-subtitle">Más de una década de experiencia en control de calidad y metrología industrial</p>
            </div>
            
            <div className="timeline">
              {[
                {
                  title: 'Jiaxipera',
                  position: 'Líder de Calidad',
                  period: '2024–2025',
                  details: [
                    'Auditorías diarias en líneas de producción',
                    'Inspección incoming, pruebas de laboratorio, análisis de defectos',
                    'Revisión de documentación de PAPP en líneas nuevas'
                  ],
                  icon: <FaCertificate />
                },
                {
                  title: 'DFABRICK',
                  position: 'Supervisora de Calidad',
                  period: '2023–2024',
                  details: [
                    'Coordinación de equipos y validación de producto',
                    'Reportes, inspecciones y documentación',
                    'Gestión de recursos humanos y materiales'
                  ],
                  icon: <FaCertificate />
                },
                {
                  title: 'Smurfit Kappa',
                  position: 'Asistente de Calidad',
                  period: '2021–2022',
                  details: [
                    'Supervisión de residentes, seguimiento a quejas',
                    'Control de inventarios y embarques',
                    'Informes mensuales de scrap'
                  ],
                  icon: <FaCertificate />
                },
                {
                  title: 'SANDEN',
                  position: 'Técnico Calibrador',
                  period: '2013–2020',
                  details: [
                    'Calibraciones, pruebas destructivas, mantenimiento',
                    'Soporte a ingeniería, elaboración de PAPP',
                    'Capacitaciones y ayudas visuales'
                  ],
                  icon: <FaCertificate />
                },
              ].map((job, i) => (
                <div key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="timeline-content">
                    <div className="timeline-icon">{job.icon}</div>
                    <div className="timeline-header">
                      <h4>{job.position}</h4>
                      <h3>{job.title}</h3>
                      <span className="timeline-period">{job.period}</span>
                    </div>
                    <button className="details-button" onClick={() => toggleModal(i)}>
                      Ver responsabilidades
                    </button>
                    {activeModal === i && (
                      <div className="modal-overlay" onClick={() => toggleModal(i)}>
                        <div className="modal" onClick={e => e.stopPropagation()}>
                          <h3>{job.position} - {job.title}</h3>
                          <span className="modal-period">{job.period}</span>
                          <ul className="modal-details">
                            {job.details.map((detail, idx) => (
                              <li key={idx}>{detail}</li>
                            ))}
                          </ul>
                          <button onClick={() => toggleModal(i)} className="modal-close">
                            Cerrar
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Video Demostración */}
          <section className="section dark-section" id="demo">
            <div className="section-header">
              <h2 className="section-title">Demostración Técnica</h2>
              <p className="section-subtitle">
                Verificación de equipo de atributos (bloques patrón) para calibrar instrumentos como micrómetros, vernier e indicadores de altura.
              </p>
            </div>
            <div className="video-container">
              <div className="video-wrapper">
                <video controls poster="/img/video-poster.jpg">
                  <source src="/img/VideoGabrielaCastorena.mp4" type="video/mp4" />
                  Tu navegador no soporta este video.
                </video>
                <div className="video-caption">
                  Procedimiento de verificación de bloques patrón según normas internacionales
                </div>
              </div>
            </div>
          </section>

          {/* Carrusel */}
          <section className="section" id="calibracion">
            <div className="section-header">
              <h2 className="section-title">Calibración y TPM</h2>
              <p className="section-subtitle">Calibración de gages de línea y mantenimiento preventivo</p>
            </div>
            <div className="carousel-container">
              <div className="carousel-slide" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {images.map((img, index) => (
                  <div key={index} className="carousel-item">
                    <img src={img} alt={`Gage ${index + 1}`} className="carousel-img" />
                    <div className="carousel-caption">Proceso de calibración {index + 1}</div>
                  </div>
                ))}
              </div>
              <button className="carousel-button prev" onClick={prevSlide} aria-label="Previous slide">
                <FaChevronLeft />
              </button>
              <button className="carousel-button next" onClick={nextSlide} aria-label="Next slide">
                <FaChevronRight />
              </button>
              <div className="carousel-dots">
                {images.map((_, index) => (
                  <button 
                    key={index} 
                    className={`dot ${index === currentSlide ? 'active' : ''}`} 
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Pruebas de laboratorio */}
          <section className="section dark-section" id="laboratorio">
            <div className="section-header">
              <h2 className="section-title">Pruebas de Laboratorio</h2>
              <p className="section-subtitle">
                Inspección de incoming, pruebas de laboratorio como dureza Rockwell, microdureza Vickers y pruebas de sedimentos.
              </p>
            </div>
            <div className="lab-grid">
              {labImages.map((img, idx) => (
                <div key={idx} className="lab-item">
                  <img src={img} alt={`Prueba de laboratorio ${idx + 1}`} className="lab-img" />
                  <div className="lab-overlay">
                    <h4>{idx === 0 ? 'Prueba de dureza' : 'Análisis de sedimentos'}</h4>
                    <p>{idx === 0 ? 'Equipo de medición de dureza Rockwell' : 'Pruebas de sedimentación en materiales'}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contacto */}
          <section className="section" id="contacto">
            <div className="section-header">
              <h2 className="section-title">Contacto</h2>
              <p className="section-subtitle">Ponte en contacto directo para cotizar servicios o colaborar en proyectos</p>
            </div>
            <div className="contact-container">
              <div className="contact-info">
                <div className="contact-card">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <h4>Correo Electrónico</h4>
                  <a href="mailto:gcastorena75@outlook.com">gcastorena75@outlook.com</a>
                </div>
                
                <div className="contact-card">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <h4>Teléfono</h4>
                  <a href="tel:+528448076422">844 807 6422</a>
                </div>
                
                <div className="contact-card">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <h4>Ubicación</h4>
                  <p>Saltillo, Coahuila, México</p>
                </div>
              </div>
              
              <div className="contact-form">
                <h3>Envíame un mensaje directo</h3>
                <form>
                  <div className="form-group">
                    <input type="text" placeholder="Nombre completo" required />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Correo electrónico" required />
                  </div>
                  <div className="form-group">
                    <input type="tel" placeholder="Teléfono (opcional)" />
                  </div>
                  <div className="form-group">
                    <textarea placeholder="Describe tu consulta o proyecto" rows="5" required></textarea>
                  </div>
                  <button type="submit" className="cta-button primary">
                    <FaEnvelope /> Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </section>
          
          <footer className="footer">
            <div className="footer-content">
              <div className="footer-logo">
                <span>Gabriela Castorena Reyes</span>
                <span>Ingeniera en Metrología Industrial</span>
              </div>
              <div className="footer-links">
                <a href="#experiencia">Experiencia</a>
                <a href="#demo">Demostraciones</a>
                <a href="#laboratorio">Laboratorio</a>
                <a href="#contacto">Contacto</a>
              </div>
              <div className="footer-social">
                <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              </div>
            </div>
            <div className="footer-bottom">
              <p>© {new Date().getFullYear()} Todos los derechos reservados</p>
              <p>Desarrollo web por <strong>SystemVkode</strong> | 844 178 6280</p>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}

export default Home;