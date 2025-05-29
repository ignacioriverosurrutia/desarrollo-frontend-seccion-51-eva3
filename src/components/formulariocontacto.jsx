import React, { useState } from 'react'; // Importa React y useState
import { Form } from 'react-bootstrap'; // Importa Form de Bootstrap

const FormularioContacto = () => {
  const [email, setEmail] = useState(''); // Estado para el email

  // Maneja el cambio en el campo de email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Form>
      {/* Campo de email con validación */}
      <Form.Control 
        type="email" 
        placeholder="Correo" 
        value={email}
        onChange={handleEmailChange}
        isInvalid={email && !email.includes("@")}
      />
      <Form.Control.Feedback type="invalid">
        Correo inválido
      </Form.Control.Feedback>
    </Form>
  );
};

export default FormularioContacto; // Exporta el componente
