// Esperar a que cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', handleRegister);
  }
});

// Manejador del formulario de registro
async function handleRegister(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const rol = document.getElementById('rol').value;

  // Validaciones
  if (!nombre || !email || !password || !rol) {
    mostrarMensaje('mensaje', 'Por favor completa todos los campos', 'error');
    return;
  }

  if (password.length < 6) {
    mostrarMensaje('mensaje', 'La contraseña debe tener mínimo 6 caracteres', 'error');
    return;
  }

  if (!email.includes('@')) {
    mostrarMensaje('mensaje', 'Por favor ingresa un email válido', 'error');
    return;
  }

  try {
    const resultado = await hacerPeticion('/register', 'POST', {
      nombre,
      email,
      password,
      rol
    });

    if (resultado.success) {
      mostrarMensaje('mensaje', '✅ ' + resultado.mensaje, 'success');
      
      // Limpiar formulario
      document.getElementById('registerForm').reset();

      // Redirigir al login después de 2 segundos
      setTimeout(() => {
        window.location.href = '../index.html';
      }, 2000);
    } else {
      mostrarMensaje('mensaje', '❌ ' + resultado.mensaje, 'error');
    }
  } catch (error) {
    mostrarMensaje('mensaje', '❌ Error de conexión con el servidor', 'error');
  }
}

