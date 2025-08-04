// src/Perfil.jsx
import { useEffect, useState } from 'react';
import './App.css';

function Perfil() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`perfil-screen ${visible ? 'fade-in' : ''}`}>
      <div className="container">
        <h1>Gabriela Castorena Reyes</h1>
        <h2>Ingeniera en Metrología Industrial</h2>
        <p className="hero-description">
          Profesional con más de 10 años de experiencia en aseguramiento de calidad, metrología y calibración.
          Ofrezco auditorías, documentación técnica, calibración de equipos, gestión de PAPP y formación técnica.
        </p>

        <div className="section">
          <h3>Contacto</h3>
          <p><strong>Email:</strong> gcastorena75@outlook.com</p>
          <p><strong>Teléfono:</strong> 844 807 6422</p>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
