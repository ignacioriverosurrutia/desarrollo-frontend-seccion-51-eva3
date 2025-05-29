import { StrictMode } from 'react' // Importa StrictMode para ayudar a detectar problemas potenciales en la app
import { createRoot } from 'react-dom/client' // Importa createRoot para renderizar la app en el DOM
import './index.css' // Importa los estilos globales
import App from './App.jsx' // Importa el componente principal de la aplicación

// Renderiza la aplicación dentro del elemento con id 'root'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/* Renderiza el componente principal dentro de StrictMode */}
  </StrictMode>,
)
