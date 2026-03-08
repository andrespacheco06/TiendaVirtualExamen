// Esperar a que cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
  }
});

// Manejador del formulario de login
async function handleLogin(e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  if (!email || !password) {
    mostrarMensaje('mensaje', 'Por favor completa todos los campos', 'error');
    return;
  }

  try {
    const resultado = await hacerPeticion('/login', 'POST', {
      email,
      password
    });

    if (resultado.success) {
      mostrarMensaje('mensaje', '✅ ' + resultado.mensaje, 'success');
      
      // Guardar datos del usuario
      guardarUsuario(resultado.usuario);

      // Redirigir al dashboard después de 1.5 segundos
      setTimeout(() => {
        window.location.href = 'pages/dashboard.html';
      }, 1500);
    } else {
      mostrarMensaje('mensaje', '❌ ' + resultado.mensaje, 'error');
    }
  } catch (error) {
    mostrarMensaje('mensaje', '❌ Error de conexión con el servidor', 'error');
  }
}

