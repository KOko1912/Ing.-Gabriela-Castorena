import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Gabriela Castorena</h1>
        <h2>Ingeniera Metrologa</h2>
      </header>

      <section className="info">
        <p>
          Bienvenida a mi sitio profesional. Me especializo en sistemas de medición, calibración y control de calidad.
          Aquí puedes conocer más sobre mis servicios, trayectoria y experiencia en el campo de la metrología.
        </p>

        <p>
          Con años de experiencia en la industria, ayudo a garantizar la trazabilidad y confiabilidad de los procesos
          mediante soluciones metrológicas eficientes.
        </p>
      </section>

      <section className="contacto">
        <h3>Contacto</h3>
        <p><strong>Correo:</strong> gabriela.castorena@email.com</p>
        <p><strong>Teléfono:</strong> +52 55 1234 5678</p>
        <p><strong>Ubicación:</strong> México</p>
      </section>
    </div>
  );
}

export default App;
