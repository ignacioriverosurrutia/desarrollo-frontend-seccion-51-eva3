import React from 'react'; // Importa React
import { Card, Button } from 'react-bootstrap'; // Importa componentes de Bootstrap
import { useNavigate } from 'react-router-dom'; // Importa hook para navegación

const ProductCard = ({ id, title, description, image }) => {
  const navigate = useNavigate(); // Hook para redireccionar

  // Función que redirige a la página de contacto con el producto seleccionado
  const handleClick = () => {
    navigate(`/contacto?producto=${encodeURIComponent(title)}`);
  };

  return (
    <Card className="mb-4" style={{ width: '18rem' }}>
      {/* Imagen del producto */}
      <Card.Img variant="top" src={image} alt={`Imagen de ${title}`} />
      <Card.Body>
        {/* Título y descripción */}
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {/* Botón para contactar */}
        <Button variant="primary" onClick={handleClick}>Contáctanos</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard; // Exporta el componente
