// src/Home.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TextType from './TextType';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/perfil');
    }, 3000); // redirige en 3 segundos
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="home-screen">
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
    </div>
  );
}

export default Home;