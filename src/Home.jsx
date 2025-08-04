// src/Home.jsx
import { useEffect, useState } from 'react';
import TextType from './TextType';
import './App.css';

function Home() {
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProfile(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-screen">
      {!showProfile ? (
        <div className="centered-content">
          <TextType
            text={["SystemVkode - Desarrollo de software web"]}
            typingSpeed={65}
            pauseDuration={2000}
            showCursor={true}
            cursorCharacter="|"
          />
          <p className="contact">Contacto: <strong>844 178 6280</strong></p>
        </div>
      ) : (
        <div className="container">
          <h1>Gabriela Castorena Reyes</h1>
          <h2>Ingeniera en Metrología Industrial</h2>
          <p>
            Profesional en calidad con amplios conocimientos en metrología industrial. Motivada a contribuir a la calidad mediante sistemas de medición precisos, calibraciones y auditorías.
          </p>

          <video controls style={{ maxWidth: '100%', margin: '2rem 0', borderRadius: '8px' }}>
            <source src="/img/VideoGabrielacastoerna.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de video.
          </video>
          <p style={{ fontStyle: 'italic' }}>
            En este vídeo se está verificando equipo de atributos, es un juego de Blok patrón, a su vez este juego de bloques sirve para calibrar equipos de medición de atributos como micrómetro, Vernier, indicadores de altura, pie de Rey.
          </p>

          <h3>Galería de Calibración</h3>
          <div className="carousel">
            <img src="/img/carusel1.jpg" alt="Calibración 1" className="carousel-img" />
            <img src="/img/carrusel2.jpg" alt="Calibración 2" className="carousel-img" />
            <img src="/img/carrusel3.jpg" alt="Calibración 3" className="carousel-img" />
          </div>
          <p style={{ fontStyle: 'italic', marginTop: '1rem' }}>
            Calibración de gages de línea así como su TPM.
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;
