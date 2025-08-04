import './App.css';
import { useEffect, useState } from 'react';
import profileImg from '/img/Gabriela-perfil.jpg';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Home() {
  const [showContent, setShowContent] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/img/carusel1.jpg",
    "/img/carrusel2.jpg",
    "/img/carrusel3.jpg"
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

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
                  Profesional con más de 10 años de experiencia en aseguramiento de calidad, metrología y calibración. Ayudo a empresas a cumplir estándares internacionales mediante sistemas confiables y auditorías efectivas.
                </p>
                <a className="cta-button" href="mailto:gcastorena75@outlook.com">Contáctame</a>
              </div>
              <div className="hero-image">
                <div className="image-container">
                  <div className="image-border"></div>
                  <img src={profileImg} alt="Gabriela Castorena" className="profile-img" />
                </div>
              </div>
            </div>
          </section>

          {/* Video */}
          <section className="section">
            <div className="section-header">
              <h2 className="section-title">Demostración Técnica</h2>
              <p className="section-subtitle">
                Verificación de equipo de atributos (juego de bloques patrón) utilizado para calibrar instrumentos como micrómetros, vernier, pies de rey, indicadores de altura.
              </p>
              <div className="video-container">
                <video controls width="100%" style={{ maxWidth: '720px', marginTop: '1.5rem', borderRadius: '12px' }}>
                  <source src="/img/VideoGabrielacastoerna.mp4" type="video/mp4" />
                  Tu navegador no soporta este video.
                </video>
              </div>
            </div>
          </section>

          {/* Carrusel Mejorado */}
          <section className="section">
            <div className="section-header">
              <h2 className="section-title">Calibración y TPM</h2>
              <p className="section-subtitle">Calibración de gages de línea y mantenimiento preventivo</p>
              <div className="carousel-container">
                <button className="carousel-button prev" onClick={prevSlide}>
                  <FaChevronLeft />
                </button>
                <div className="carousel-slide">
                  <img 
                    src={images[currentSlide]} 
                    alt={`Gage ${currentSlide + 1}`} 
                    className="carousel-img active" 
                  />
                </div>
                <button className="carousel-button next" onClick={nextSlide}>
                  <FaChevronRight />
                </button>
                <div className="carousel-dots">
                  {images.map((_, index) => (
                    <span 
                      key={index} 
                      className={`dot ${index === currentSlide ? 'active' : ''}`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Servicios */}
          <section className="section dark-section">
            <div className="section-header">
              <h2 className="section-title">Servicios Profesionales</h2>
              <p className="section-subtitle">Ofrecemos soluciones técnicas de alta calidad para tus procesos industriales</p>
            </div>
            <div className="services-grid">
              <div className="service-card">
                <h4>Auditorías de Calidad</h4>
                <p>Detección de fallos, cumplimiento de normas y mejora continua en líneas de producción.</p>
              </div>
              <div className="service-card">
                <h4>Calibración de Instrumentos</h4>
                <p>Micrómetros, vernier, indicadores de altura, pies de rey y más.</p>
              </div>
              <div className="service-card">
                <h4>Documentación PAPP</h4>
                <p>Elaboración y análisis de protocolos de producción y calidad.</p>
              </div>
              <div className="service-card">
                <h4>Formación Técnica</h4>
                <p>Capacitación en procesos de inspección, medición y mejora continua.</p>
              </div>
            </div>
          </section>

          {/* Contacto */}
          <section className="section">
            <div className="section-header">
              <h2 className="section-title">Contacto</h2>
              <p className="section-subtitle">Ponte en contacto directo con Gabriela para cotizar o colaborar</p>
            </div>
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