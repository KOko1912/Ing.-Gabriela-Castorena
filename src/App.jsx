import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('servicios');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      {/* Header flotante */}
      <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <nav>
            <ul>
              <li><button onClick={() => setActiveTab('inicio')}>Inicio</button></li>
              <li><button onClick={() => setActiveTab('servicios')}>Servicios</button></li>
              <li><button onClick={() => setActiveTab('experiencia')}>Experiencia</button></li>
              <li><button onClick={() => setActiveTab('contacto')}>Contacto</button></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="animate-fade-in">Gabriela Castorena Reyes</h1>
              <h2 className="animate-fade-in animate-delay-1">Ingeniera en Metrología Industrial</h2>
              <p className="hero-description animate-fade-in animate-delay-2">
                Profesional con más de 10 años de experiencia en aseguramiento de calidad, metrología y calibración.
                Ayudo a empresas a cumplir estándares internacionales mediante sistemas confiables y auditorías efectivas.
              </p>
              <button 
                className="cta-button animate-fade-in animate-delay-3"
                onClick={() => setActiveTab('contacto')}
              >
                Contáctame
              </button>
            </div>
            <div className="hero-image animate-fade-in animate-delay-1">
              <div className="image-container">
                <img
                  src="/img/Gabriela-perfil.jpg"
                  alt="Gabriela Castorena"
                  className="profile-img"
                />
                <div className="image-border"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className={`section ${activeTab === 'servicios' ? 'active' : ''}`}>
        <div className="container">
          <div className="section-header">
            <h3 className="section-title">Servicios Profesionales</h3>
            <p className="section-subtitle">Soluciones especializadas para garantizar la calidad y precisión en tus procesos</p>
          </div>
          <div className="services-grid">
            <div className="service-card animate-slide-up">
              <div className="service-icon">📊</div>
              <h4>Auditorías Internas</h4>
              <p>Evaluación exhaustiva de sistemas de calidad para cumplimiento de normas internacionales.</p>
            </div>
            <div className="service-card animate-slide-up animate-delay-1">
              <div className="service-icon">🔧</div>
              <h4>Calibración de Equipos</h4>
              <p>Mantenimiento y ajuste de instrumentos de medición para garantizar precisión.</p>
            </div>
            <div className="service-card animate-slide-up animate-delay-2">
              <div className="service-icon">📝</div>
              <h4>Asesoría PAPP</h4>
              <p>Implementación de Procesos de Aprobación de Partes de Producción.</p>
            </div>
            <div className="service-card animate-slide-up animate-delay-3">
              <div className="service-icon">🎓</div>
              <h4>Capacitación Técnica</h4>
              <p>Formación especializada en metrología y control de calidad para equipos.</p>
            </div>
            <div className="service-card animate-slide-up animate-delay-4">
              <div className="service-icon">✅</div>
              <h4>Validación de Procesos</h4>
              <p>Documentación y verificación de procesos productivos.</p>
            </div>
            <div className="service-card animate-slide-up animate-delay-5">
              <div className="service-icon">📈</div>
              <h4>Análisis de Datos</h4>
              <p>Estudios estadísticos para mejora continua de procesos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experiencia */}
      <section id="experiencia" className={`section dark-section ${activeTab === 'experiencia' ? 'active' : ''}`}>
        <div className="container">
          <div className="section-header">
            <h3 className="section-title">Experiencia Profesional</h3>
            <p className="section-subtitle">Más de una década contribuyendo a la excelencia en la industria</p>
          </div>
          
          <div className="timeline">
            <div className="timeline-item animate-slide-right">
              <div className="timeline-date">2024-2025</div>
              <div className="timeline-content">
                <h4>Jiaxipera – Líder de Calidad</h4>
                <ul>
                  <li>Auditorías diarias en líneas de producción</li>
                  <li>Inspección incoming y pruebas de laboratorio</li>
                  <li>Análisis de defectos y documentación de PAPP</li>
                </ul>
              </div>
            </div>
            
            <div className="timeline-item animate-slide-left">
              <div className="timeline-date">2023-2024</div>
              <div className="timeline-content">
                <h4>DFABRICK – Supervisora de Calidad</h4>
                <ul>
                  <li>Supervisión de equipos y cumplimiento de normas</li>
                  <li>Validación de productos y coordinación de recursos</li>
                  <li>Redacción de reportes y capacitación</li>
                </ul>
              </div>
            </div>
            
            <div className="timeline-item animate-slide-right">
              <div className="timeline-date">2021-2022</div>
              <div className="timeline-content">
                <h4>Smurfit Kappa – Asistente de Calidad</h4>
                <ul>
                  <li>Supervisión de personal en planta cliente</li>
                  <li>Gestión de inventarios y liberación de embarques</li>
                  <li>Atención a quejas de clientes y control de scrap</li>
                </ul>
              </div>
            </div>
            
            <div className="timeline-item animate-slide-left">
              <div className="timeline-date">2013-2020</div>
              <div className="timeline-content">
                <h4>SANDEN – Técnico Calibrador</h4>
                <ul>
                  <li>Administración de calibraciones y pruebas destructivas</li>
                  <li>Elaboración de ayudas visuales y soporte a ingeniería</li>
                  <li>Gestión de MSA y mantenimiento de equipos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className={`section ${activeTab === 'contacto' ? 'active' : ''}`}>
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info animate-fade-in">
              <h3 className="section-title">Contacto</h3>
              <p><strong>Email:</strong> gcastorena75@outlook.com</p>
              <p><strong>Teléfono:</strong> 844 807 6422</p>
              <p><strong>Ubicación:</strong> México</p>
              
              <div className="social-links">
                <a href="#" className="social-icon">LinkedIn</a>
                <a href="#" className="social-icon">Twitter</a>
                <a href="#" className="social-icon">Facebook</a>
              </div>
            </div>
            
            <div className="contact-form animate-fade-in animate-delay-1">
              <h4>Envíame un mensaje</h4>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Nombre" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Asunto" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Mensaje" rows="5" required></textarea>
                </div>
                <button type="submit" className="cta-button">Enviar Mensaje</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Gabriela Castorena Reyes - Ingeniera en Metrología Industrial</p>
        </div>
      </footer>
    </div>
  );
}

export default App;