import React from 'react'; // Importa React
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa componentes de enrutamiento
import Header from './components/Header'; // Importa el encabezado
import Footer from './components/footer'; // Importa el pie de página
import Home from './pages/home'; // Importa la página de inicio
import Productos from './pages/productos'; // Importa la página de productos
import Contacto from './pages/contacto'; // Importa la página de contacto

const App = () => {
  return (
    <Router>
      {/* Encabezado visible en todas las páginas */}
      <Header />
      {/* Definición de rutas de la aplicación */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Ruta para la página de inicio */}
        <Route path="/productos" element={<Productos />} /> {/* Ruta para productos */}
        <Route path="/contacto" element={<Contacto />} /> {/* Ruta para contacto */}
      </Routes>
      {/* Pie de página visible en todas las páginas */}
      <Footer />
    </Router>
  );
};

export default App; // Exporta el componente principal de la app