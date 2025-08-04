import TextType from './TextType';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '20vh' }}>
      <TextType
        text={["SystemVkode - Desarrollo de software web"]}
        typingSpeed={60}
        pauseDuration={2000}
        showCursor={true}
        cursorCharacter="|"
      />
      <p style={{ marginTop: "1rem", fontSize: "1.2rem" }}>
        Contacto: <strong>844 178 6280</strong>
      </p>
      <Link to="/perfil" style={{ display: "inline-block", marginTop: "2rem", fontWeight: "bold", color: "#2563eb" }}>
        Ver perfil profesional →
      </Link>
    </div>
  );
}

export default Home;
