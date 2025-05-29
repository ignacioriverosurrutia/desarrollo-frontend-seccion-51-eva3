import React from 'react'; // Importa React
import CarouselProductos from '../components/carouselproductos.jsx'; // Importa el carrusel de productos

const Home = () => {
  // Lista de imágenes para el carrusel
  const imagenes = [
    { src: 'https://via.placeholder.com/800x300?text=Lana+1', caption: 'Lana Merino' },
    { src: 'https://via.placeholder.com/800x300?text=Vellón+2', caption: 'Vellón Natural' }
  ];

  return (
    <div className="container mt-4">
      {/* Título de bienvenida */}
      <h1 className="mb-4">Bienvenida a Tejelanas Vivi</h1>
      {/* Carrusel de productos */}
      <CarouselProductos images={imagenes.map(img => ({ ...img, ...{ src: img.src } }))} />
    </div>
  );
};

export default Home; // Exporta el componente
