// Configuración de la API
// Cambiar según donde esté hosteado el backend
const API_URL = 'http://localhost:3000/api';

// Funciones de almacenamiento local
function guardarUsuario(usuario) {
  localStorage.setItem('usuario', JSON.stringify(usuario));
}

function obtenerUsuario() {
  const usuario = localStorage.getItem('usuario');
  return usuario ? JSON.parse(usuario) : null;
}

function obtenerRolUsuario() {
  const usuario = obtenerUsuario();
  return usuario ? usuario.rol : null;
}

function limpiarDatos() {
  localStorage.removeItem('usuario');
}

// Función para mostrar mensajes
function mostrarMensaje(elementId, mensaje, tipo = 'info') {
  const elemento = document.getElementById(elementId);
  if (!elemento) return;

  elemento.textContent = mensaje;
  elemento.className = `mensaje show ${tipo}`;

  // Auto-ocultar después de 5 segundos
  setTimeout(() => {
    elemento.classList.remove('show');
  }, 5000);
}

// Peticiones HTTP
async function hacerPeticion(endpoint, metodo = 'GET', datos = null) {
  const opciones = {
    method: metodo,
    headers: {
      'Content-Type': 'application/json',
      'x-user-role': obtenerRolUsuario() || ''
    }
  };

  if (datos) {
    opciones.body = JSON.stringify(datos);
  }

  try {
    const respuesta = await fetch(`${API_URL}${endpoint}`, opciones);
    const resultado = await respuesta.json();

    if (!respuesta.ok && !resultado.success) {
      throw new Error(resultado.mensaje || 'Error en la solicitud');
    }

    return resultado;
  } catch (error) {
    return { success: false, mensaje: error.message };
  }
}
