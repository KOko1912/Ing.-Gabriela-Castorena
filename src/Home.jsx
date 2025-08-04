// src/Home.jsx
import './App.css';
import { useEffect, useState } from 'react';
import profileImg from '/img/Gabriela-perfil.jpg';
import { FaChevronLeft, FaChevronRight, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaCertificate, FaTools, FaGraduationCap } from 'react-icons/fa';
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
    const timer = setTimeout(() => setShowContent(true), 2500);
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
                <div className="contact-info-header">
                  <span><FaPhone /> 844 807 6422</span>
                  <span><FaEnvelope /> gcastorena75@outlook.com</span>
                </div>
                <p className="hero-description">
                  Especialista en departamento de calidad con amplios conocimientos en laboratorio de metrología e industria y un sólido compromiso con el cumplimiento de estándares. Persona motivada con ansias de desarrollo profesional, deseando aportar mis destrezas para garantizar el éxito de la organización.
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

          {/* Habilidades */}
          <section className="section dark-section" id="habilidades">
            <div className="section-header">
              <h2 className="section-title">Habilidades</h2>
              <div className="skills-grid">
                {[
                  { icon: <FaTools />, name: 'Comunicación efectiva' },
                  { icon: <FaTools />, name: 'Trabajo en equipo' },
                  { icon: <FaTools />, name: 'Organización' },
                  { icon: <FaTools />, name: 'Adaptabilidad' },
                  { icon: <FaTools />, name: 'Pensamiento crítico' },
                  { icon: <FaTools />, name: 'Creatividad' }
                ].map((skill, index) => (
                  <div key={index} className="skill-card">
                    <div className="skill-icon">{skill.icon}</div>
                    <h4>{skill.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Estudios */}
          <section className="section" id="estudios">
            <div className="section-header">
              <h2 className="section-title">Estudios</h2>
            </div>
            <div className="education-container">
              <div className="education-card">
                <div className="education-icon">
                  <FaGraduationCap />
                </div>
                <div className="education-content">
                  <h3>Universidad Politécnica de Ramos Arizpe</h3>
                  <p>Ingeniero en Metrología Industrial</p>
                </div>
              </div>
              
              <div className="education-card">
                <div className="education-icon">
                  <FaCertificate />
                </div>
                <div className="education-content">
                  <h3>Formación complementaria</h3>
                  <ul className="education-list">
                    <li>Curso de Core Tools</li>
                    <li>Excel Básico-Intermedio</li>
                    <li>Curso Six Sigma</li>
                    <li>Curso básico de GD&T</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Experiencia Profesional */}
          <section className="section dark-section" id="experiencia">
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
                    'Supervisión del cumplimiento de los estándares de calidad por medio de auditorias diarias en líneas',
                    'Realización de inspección incoming, pruebas de laboratorio y análisis de defectos detectados en procesos',
                    'Revisión y aprobación de documentación perteneciente a protocolos e informes de estudios de PAPP de líneas nuevas'
                  ],
                  icon: <FaCertificate />
                },
                {
                  title: 'DFABRICK',
                  position: 'Supervisora de Calidad',
                  period: '2023–2024',
                  details: [
                    'Supervisión de los equipos de trabajo para garantizar cumplimiento de normas del cliente',
                    'Redacción de informes y notificación de observaciones o incidencias',
                    'Coordinación de personal, capacitación, validación de producto y solución de problemas técnicos'
                  ],
                  icon: <FaCertificate />
                },
                {
                  title: 'Smurfit Kappa',
                  position: 'Asistente de Calidad',
                  period: '2021–2022',
                  details: [
                    'Supervisión de residentes en planta cliente',
                    'Seguimiento a quejas, normas y estándares de producto',
                    'Inventarios, liberación de embarques e informes de scrap'
                  ],
                  icon: <FaCertificate />
                },
                {
                  title: 'SANDEN',
                  position: 'Técnico Calibrador',
                  period: '2013–2020',
                  details: [
                    'Administración MSA, calibraciones, mantenimiento y pruebas destructivas',
                    'Elaboración de ayudas visuales, capacitaciones',
                    'Soporte a ingeniería y documentación de PAPP'
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
          <section className="section" id="demo">
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
          <section className="section dark-section" id="calibracion">
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
          <section className="section" id="laboratorio">
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
          <section className="section dark-section" id="contacto">
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