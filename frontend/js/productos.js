// Variables globales
let productoEnEdicion = null;
let todosLosProductos = [];

// Esperar a que cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
  verificarAutenticacion();
  cargarProductos();
  
  // Event listeners
  const formProducto = document.getElementById('formProducto');
  if (formProducto) {
    formProducto.addEventListener('submit', handleGuardarProducto);
  }

  // Escuchar Enter en búsqueda
  document.getElementById('buscarInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      buscarProductos();
    }
  });
});

// Verificar si el usuario está autenticado
function verificarAutenticacion() {
  const usuario = obtenerUsuario();
  
  if (!usuario) {
    window.location.href = '../index.html';
    return;
  }

  // Mostrar información del usuario
  const usuarioInfo = document.getElementById('usuarioInfo');
  if (usuarioInfo) {
    usuarioInfo.innerHTML = `👤 ${usuario.nombre} (${usuario.rol.toUpperCase()})`;
  }

  // Mostrar botón de crear solo para admin
  const seccionCrear = document.getElementById('seccionCrearProducto');
  if (usuario.rol === 'admin' && seccionCrear) {
    seccionCrear.style.display = 'block';
  }
}

// Cargar todos los productos
async function cargarProductos() {
  try {
    const resultado = await hacerPeticion('/productos', 'GET');

    if (resultado.success) {
      todosLosProductos = resultado.productos || [];
      renderizarTabla(todosLosProductos);
    } else {
      mostrarMensaje('mensajeGeneral', '❌ ' + resultado.mensaje, 'error');
    }
  } catch (error) {
    mostrarMensaje('mensajeGeneral', '❌ Error al cargar productos', 'error');
  }
}

// Buscar productos
async function buscarProductos() {
  const buscar = document.getElementById('buscarInput').value.trim();

  if (!buscar) {
    cargarProductos();
    return;
  }

  try {
    const resultado = await hacerPeticion(`/productos?buscar=${encodeURIComponent(buscar)}`, 'GET');

    if (resultado.success) {
      renderizarTabla(resultado.productos || []);
      mostrarMensaje('mensajeGeneral', 'ℹ️ Búsqueda completada', 'info');
    } else {
      mostrarMensaje('mensajeGeneral', '❌ Error en la búsqueda', 'error');
    }
  } catch (error) {
    mostrarMensaje('mensajeGeneral', '❌ Error al buscar', 'error');
  }
}

// Renderizar tabla de productos
function renderizarTabla(productos) {
  const tbody = document.getElementById('tablaProductosCuerpo');
  
  if (!productos || productos.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 20px;">No hay productos disponibles</td></tr>';
    return;
  }

  tbody.innerHTML = productos.map(producto => `
    <tr>
      <td>${producto.id}</td>
      <td>${producto.nombre}</td>
      <td>$${parseFloat(producto.precio).toFixed(2)}</td>
      <td>${producto.stock}</td>
      <td>${producto.descripcion}</td>
      <td>
        <div class="acciones">
          ${obtenerRolUsuario() === 'admin' ? `
            <button class="btn btn-edit" onclick="mostrarFormularioEditar(${producto.id})">✏️ Editar</button>
            <button class="btn btn-delete" onclick="eliminarProducto(${producto.id})">🗑️ Eliminar</button>
          ` : `
            <span style="color: #94a3b8; font-size: 12px;">Solo lectura</span>
          `}
        </div>
      </td>
    </tr>
  `).join('');
}

// Mostrar formulario para crear producto
function mostrarFormularioCreate() {
  productoEnEdicion = null;
  document.getElementById('tituloFormulario').textContent = 'Crear Nuevo Producto';
  document.getElementById('formProducto').reset();
  document.getElementById('formularioProducto').style.display = 'flex';
  document.getElementById('mensajeFormulario').innerHTML = '';
}

// Mostrar formulario para editar producto
function mostrarFormularioEditar(id) {
  const producto = todosLosProductos.find(p => p.id === id);
  
  if (!producto) {
    mostrarMensaje('mensajeGeneral', '❌ Producto no encontrado', 'error');
    return;
  }

  productoEnEdicion = id;
  document.getElementById('tituloFormulario').textContent = 'Editar Producto';
  document.getElementById('formNombre').value = producto.nombre;
  document.getElementById('formPrecio').value = producto.precio;
  document.getElementById('formStock').value = producto.stock;
  document.getElementById('formDescripcion').value = producto.descripcion;
  document.getElementById('formularioProducto').style.display = 'flex';
  document.getElementById('mensajeFormulario').innerHTML = '';
}

// Cerrar formulario
function cerrarFormulario() {
  document.getElementById('formularioProducto').style.display = 'none';
  document.getElementById('formProducto').reset();
  productoEnEdicion = null;
}

// Guardar producto (crear o editar)
async function handleGuardarProducto(e) {
  e.preventDefault();

  const nombre = document.getElementById('formNombre').value.trim();
  const precio = parseFloat(document.getElementById('formPrecio').value);
  const stock = parseInt(document.getElementById('formStock').value);
  const descripcion = document.getElementById('formDescripcion').value.trim();

  // Validaciones
  if (!nombre || !precio || isNaN(stock) || !descripcion) {
    mostrarMensaje('mensajeFormulario', 'Por favor completa todos los campos', 'error');
    return;
  }

  if (precio <= 0) {
    mostrarMensaje('mensajeFormulario', 'El precio debe ser mayor a 0', 'error');
    return;
  }

  if (stock < 0) {
    mostrarMensaje('mensajeFormulario', 'El stock no puede ser negativo', 'error');
    return;
  }

  const datos = { nombre, precio, stock, descripcion };
  const esCreacion = !productoEnEdicion;
  const endpoint = esCreacion ? '/productos' : `/productos/${productoEnEdicion}`;
  const metodo = esCreacion ? 'POST' : 'PUT';

  try {
    const resultado = await hacerPeticion(endpoint, metodo, datos);

    if (resultado.success) {
      mostrarMensaje('mensajeFormulario', '✅ ' + resultado.mensaje, 'success');
      
      setTimeout(() => {
        cerrarFormulario();
        cargarProductos();
      }, 1000);
    } else {
      mostrarMensaje('mensajeFormulario', '❌ ' + resultado.mensaje, 'error');
    }
  } catch (error) {
    mostrarMensaje('mensajeFormulario', '❌ Error al guardar', 'error');
  }
}

// Eliminar producto
async function eliminarProducto(id) {
  const usuario = obtenerUsuario();
  
  if (usuario.rol !== 'admin') {
    mostrarMensaje('mensajeGeneral', '❌ Solo administradores pueden eliminar productos', 'error');
    return;
  }

  if (!confirm('¿Estás seguro de que deseas eliminar este producto?')) {
    return;
  }

  try {
    const resultado = await hacerPeticion(`/productos/${id}`, 'DELETE');

    if (resultado.success) {
      mostrarMensaje('mensajeGeneral', '✅ ' + resultado.mensaje, 'success');
      cargarProductos();
    } else {
      mostrarMensaje('mensajeGeneral', '❌ ' + resultado.mensaje, 'error');
    }
  } catch (error) {
    mostrarMensaje('mensajeGeneral', '❌ Error al eliminar', 'error');
  }
}

// Cerrar sesión
function logout() {
  if (confirm('¿Deseas cerrar sesión?')) {
    limpiarDatos();
    window.location.href = '../index.html';
  }
}

// Cerrar modal al hacer click fuera de él
document.addEventListener('click', (e) => {
  const formularioModal = document.getElementById('formularioProducto');
  if (e.target === formularioModal) {
    cerrarFormulario();
  }
});

