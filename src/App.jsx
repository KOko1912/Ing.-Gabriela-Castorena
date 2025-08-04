import './App.css';

function App() {
  return (
    <div className="container">
      <header style={{ textAlign: 'center' }}>
       <img
  src="/img/Gabriela-perfil.png"
  alt="Gabriela Castorena"
  width="160"
  style={{ borderRadius: '50%', marginBottom: '1rem' }}
/>

        <h1>Gabriela Castorena Reyes</h1>
        <h2>Ingeniera en Metrología Industrial</h2>
      </header>

      <section className="info">
        <h3>Perfil Profesional</h3>
        <p>
          Especialista en calidad con amplios conocimientos en laboratorios de metrología e industria, con sólido compromiso con el cumplimiento de estándares. Motivada, con ansias de desarrollo profesional y orientada a aportar valor garantizando la calidad y éxito organizacional.
        </p>

        <h3>Habilidades</h3>
        <ul>
          <li>Comunicación efectiva</li>
          <li>Organización y responsabilidad</li>
          <li>Pensamiento crítico y sentido de urgencia</li>
          <li>Trabajo en equipo y adaptabilidad</li>
          <li>Creatividad</li>
        </ul>

        <h3>Experiencia</h3>

        <strong>Jiaxipera – Líder de Calidad (05/2024 – 06/2025)</strong>
        <ul>
          <li>Auditorías diarias en líneas de producción</li>
          <li>Inspección de materiales, pruebas de laboratorio y análisis de defectos</li>
          <li>Documentación de protocolos e informes PAPP</li>
        </ul>

        <strong>DFABRICK – Supervisora de Calidad (01/2023 – 05/2024)</strong>
        <ul>
          <li>Supervisión y coordinación de equipos</li>
          <li>Gestión de recursos humanos y materiales</li>
          <li>Inspecciones, validación de calidad y capacitación</li>
        </ul>

        <strong>Smurfit Kappa – Asistente de Calidad (01/2021 – 12/2022)</strong>
        <ul>
          <li>Supervisión de personal en planta cliente</li>
          <li>Seguimiento a quejas y estándares de calidad</li>
          <li>Inventarios y documentación mensual</li>
        </ul>

        <strong>SANDEN – Técnico Calibrador (03/2013 – 06/2020)</strong>
        <ul>
          <li>Calibraciones, mantenimientos y pruebas destructivas</li>
          <li>Soporte a ingeniería y elaboración de PAPP</li>
          <li>Capacitación y ayudas visuales</li>
        </ul>

        <h3>Formación Académica</h3>
        <p>
          <strong>Universidad Politécnica de Ramos Arizpe</strong><br />
          Ingeniería en Metrología Industrial
        </p>

        <h3>Formación Complementaria</h3>
        <ul>
          <li>Curso de Core Tools</li>
          <li>Curso de Six Sigma</li>
          <li>Curso básico de GD&T</li>
          <li>Excel Básico-Intermedio</li>
        </ul>

        <h3>Idiomas</h3>
        <p>Inglés: A2 (Básico)</p>
      </section>

      <section className="contacto">
        <h3>Contacto</h3>
        <p><strong>Correo:</strong> gcastorena75@outlook.com</p>
        <p><strong>Teléfono:</strong> 844 807 6422</p>
        <p><strong>Ubicación:</strong> México</p>
      </section>
    </div>
  );
}

export default App;
