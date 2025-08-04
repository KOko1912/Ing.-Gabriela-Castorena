// src/Home.jsx
import TextType from './TextType';
import { Link } from 'react-router-dom';

function Home() {
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
        <Link to="/perfil" className="cta-button">
          Ver perfil profesional →
        </Link>
      </div>
    </div>
  );
}

export default Home;
