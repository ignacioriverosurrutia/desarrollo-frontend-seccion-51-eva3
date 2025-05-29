import React, { useState } from 'react'; // Importa React y useState

// Componente funcional para mostrar una imagen con carga optimizada y fallback
const ImagenCargada = ({ src, alt, width = "100%", height = "auto", ...props }) => {
  const [cargando, setCargando] = useState(true); // Estado para saber si la imagen está cargando
  const [error, setError] = useState(false); // Estado para saber si hubo error al cargar

  // Cuando la imagen se carga correctamente
  const handleLoad = () => setCargando(false);

  // Cuando ocurre un error al cargar la imagen
  const handleError = () => {
    setCargando(false);
    setError(true);
  };

  return (
    <div style={{ width, height, position: 'relative', minHeight: 100 }}>
      {/* Muestra mensaje de carga mientras la imagen se está cargando */}
      {cargando && !error && (
        <div style={{ textAlign: 'center', padding: '1em' }}>Cargando imagen...</div>
      )}
      {/* Muestra mensaje de error si la imagen no se pudo cargar */}
      {error ? (
        <div style={{ color: 'red', textAlign: 'center' }}>No se pudo cargar la imagen</div>
      ) : (
        // Muestra la imagen cuando se ha cargado correctamente
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          style={cargando ? { display: 'none' } : { display: 'block' }}
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      )}
    </div>
  );
};

export default ImagenCargada; // Exporta el componente