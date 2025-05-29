import React, { useState, useEffect, Suspense, lazy } from 'react'; // Importa React y hooks necesarios
import { Form, Button, Alert, Spinner } from 'react-bootstrap'; // Importa componentes de Bootstrap
import { useLocation } from 'react-router-dom'; // Importa hook para acceder a la ubicación actual

// Lazy load de componentes pesados si aplica
const ImagenCargada = lazy(() => import('../components/ImagenCargada')); // Carga diferida del componente de imagen

const Contacto = () => {
  // Estados para los campos del formulario y validaciones
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [producto, setProducto] = useState('');
  const [enviado, setEnviado] = useState(false); // Estado para mostrar mensaje de éxito
  const [emailValido, setEmailValido] = useState(true); // Estado para validación de email
  const [mensajeValido, setMensajeValido] = useState(true); // Estado para validación de mensaje

  const location = useLocation(); // Obtiene la ubicación actual (para leer query params)

  useEffect(() => {
    // Lee el parámetro 'producto' de la URL y lo guarda en el estado
    const params = new URLSearchParams(location.search);
    const productoParam = params.get('producto');
    if (productoParam) setProducto(productoParam);
  }, [location]);

  // Función para validar el formato del email
  const validarEmail = (correo) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
  };

  // Función para limpiar el input de posibles etiquetas HTML
  const sanitizarInput = (texto) => texto.trim().replace(/<[^>]*>?/gm, '');

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    const emailSanitizado = sanitizarInput(email);
    const mensajeSanitizado = sanitizarInput(mensaje);

    const emailEsValido = validarEmail(emailSanitizado);
    const mensajeEsValido = mensajeSanitizado.length >= 10;

    setEmailValido(emailEsValido);
    setMensajeValido(mensajeEsValido);

    if (emailEsValido && mensajeEsValido) {
      setEnviado(true); // Muestra mensaje de éxito si todo es válido
    }
  };

  return (
    <div className="container mt-5">
      <h2>Contáctanos</h2>
      {/* Muestra alerta de éxito si el mensaje fue enviado */}
      {enviado && <Alert variant="success">Mensaje enviado correctamente.</Alert>}
      <Form onSubmit={handleSubmit} noValidate>
        {/* Campo de email con validación */}
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="nombre@correo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isInvalid={!emailValido}
            required
          />
          <Form.Control.Feedback type="invalid">
            Ingresa un correo válido.
          </Form.Control.Feedback>
        </Form.Group>
        {/* Campo de producto, solo lectura */}
        <Form.Group className="mb-3">
          <Form.Label>Producto</Form.Label>
          <Form.Control type="text" value={producto} readOnly />
        </Form.Group>
        {/* Campo de mensaje con validación */}
        <Form.Group className="mb-3">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            isInvalid={!mensajeValido}
            required
          />
          <Form.Control.Feedback type="invalid">
            El mensaje debe tener al menos 10 caracteres.
          </Form.Control.Feedback>
        </Form.Group>
        {/* Botón para enviar el formulario */}
        <Button variant="primary" type="submit">Enviar</Button>
      </Form>

      {/* Imagen cargada de forma diferida (lazy loading) */}
      <Suspense fallback={<Spinner animation="border" />}>
        <ImagenCargada
          src="https://via.placeholder.com/600x400"
          alt="Ejemplo optimizado"
          width="100%"
          height="auto"
        />
      </Suspense>
    </div>
  );
};

export default Contacto; // Exporta el componente para su uso en otras partes de la app