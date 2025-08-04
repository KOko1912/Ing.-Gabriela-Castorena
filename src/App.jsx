import './App.css';

function App() {
  return (
    <div className="container">
      <header className="hero">
        <img
          src="/img/Gabriela-perfil.jpg"
          alt="Gabriela Castorena"
          className="profile-img"
        />
        <div>
          <h1>Gabriela Castorena Reyes</h1>
          <h2>Ingeniera en Metrología Industrial</h2>
          <p className="hero-description">
            Profesional con más de 10 años de experiencia en aseguramiento de calidad, metrología y calibración.
            Ayudo a empresas a cumplir estándares internacionales mediante sistemas confiables y auditorías efectivas.
          </p>
        </div>
      </header>

      <section className="section">
        <h3 className="section-title">Servicios Profesionales</h3>
        <ul className="services-list">
          <li>✔ Auditorías internas de calidad</li>
          <li>✔ Calibración y mantenimiento de equipos</li>
          <li>✔ Asesoría en PAPP y Core Tools</li>
          <li>✔ Capacitación técnica en metrología</li>
          <li>✔ Validación y documentación de procesos</li>
        </ul>
      </section>

      <section className="section">
        <h3 className="section-title">Experiencia en la Industria</h3>
        <div className="cards">
          <div className="card">
            <h4>Jiaxipera – Líder de Calidad</h4>
            <p className="date">05/2024 – 06/2025</p>
            <ul>
              <li>Auditorías diarias en líneas de producción</li>
              <li>Inspección incoming y pruebas de laboratorio</li>
              <li>Análisis de defectos y documentación de PAPP</li>
            </ul>
          </div>
          <div className="card">
            <h4>DFABRICK – Supervisora de Calidad</h4>
            <p className="date">01/2023 – 05/2024</p>
            <ul>
              <li>Supervisión de equipos y cumplimiento de normas</li>
              <li>Validación de productos y coordinación de recursos</li>
              <li>Redacción de reportes y capacitación</li>
            </ul>
          </div>
          <div className="card">
            <h4>Smurfit Kappa – Asistente de Calidad</h4>
            <p className="date">01/2021 – 12/2022</p>
            <ul>
              <li>Supervisión de personal en planta cliente</li>
              <li>Gestión de inventarios y liberación de embarques</li>
              <li>Atención a quejas de clientes y control de scrap</li>
            </ul>
          </div>
          <div className="card">
            <h4>SANDEN – Técnico Calibrador</h4>
            <p className="date">03/2013 – 06/2020</p>
            <ul>
              <li>Administración de calibraciones y pruebas destructivas</li>
              <li>Elaboración de ayudas visuales y soporte a ingeniería</li>
              <li>Gestión de MSA y mantenimiento de equipos</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <h3 className="section-title">Contacto</h3>
        <p><strong>Email:</strong> gcastorena75@outlook.com</p>
        <p><strong>Teléfono:</strong> 844 807 6422</p>
        <p><strong>Ubicación:</strong> México</p>
      </section>
    </div>
  );
}

export default App;
