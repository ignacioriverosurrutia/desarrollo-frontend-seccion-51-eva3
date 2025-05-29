import React from 'react'; // Importa React
import { Carousel } from 'react-bootstrap'; // Importa el componente Carousel de Bootstrap

// Componente funcional que recibe un arreglo de imágenes por props
function CarouselProductos({ images }) {
    return (
        <Carousel>
            {/* Mapea cada imagen para mostrarla en el carrusel */}
            {images.map((img, idx) => (
                <Carousel.Item key={idx}>
                    {/* Imagen del carrusel */}
                    <img
                        className="d-block w-100"
                        src={img.src}
                        alt={img.caption} />
                    {/* Título o descripción de la imagen */}
                    <Carousel.Caption>
                        <h3>{img.caption}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default CarouselProductos; // Exporta el componente
