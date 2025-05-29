import React, { useEffect, useState } from 'react'; // Importa React y hooks necesarios
import ProductCard from '../components/productcard'; // Importa el componente de tarjeta de producto
import productosData from '../data/productos.json'; // Importa los datos de productos desde un archivo JSON

const Productos = () => {
  const [productos, setProductos] = useState([]); // Estado para almacenar la lista de productos

  useEffect(() => {
    setProductos(productosData); // Carga los productos al montar el componente
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Nuestros Productos</h2>
      <div className="row">
        {/* Mapea cada producto y lo muestra en una tarjeta */}
        {productos.map(producto => (
          <div key={producto.id} className="col-md-4">
            <ProductCard {...producto} /> {/* Renderiza la tarjeta del producto */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos; // Exporta el componente de productos