import React from 'react'; // Importa React
import { Container } from 'react-bootstrap'; // Importa el contenedor de Bootstrap

// Componente funcional Footer que muestra el pie de página
const Footer = () => (
  <footer className="bg-light text-center py-3 mt-5">
    <Container>
      {/* Texto de derechos de autor */}
      <p>&copy; 2025 Tejelanas Vivi - Todos los derechos reservados</p>
    </Container>
  </footer>
);

export default Footer; // Exporta el componente Footer