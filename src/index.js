import React from 'react'; // Importa React para usar JSX
import ReactDOM from 'react-dom/client'; // Importa ReactDOM para renderizar la app en el DOM
import App from './App.jsx'; // Importa el componente principal de la aplicación
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap

const root = ReactDOM.createRoot(document.getElementById('root')); // Obtiene el elemento root y crea el punto de entrada de la app
root.render(<App />); // Renderiza el componente principal App en el DOM