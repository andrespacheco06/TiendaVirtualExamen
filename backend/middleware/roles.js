// Middleware para verificar que solo admin puede eliminar productos
exports.verificarAdmin = (req, res, next) => {
  // El rol viene desde el headers (enviado desde frontend)
  const rol = req.headers['x-user-role'];

  if (!rol) {
    return res.status(401).json({ 
      success: false,
      mensaje: 'No autenticado. Proporciona tu rol' 
    });
  }

  if (rol !== 'admin') {
    return res.status(403).json({ 
      success: false,
      mensaje: 'Solo administradores pueden eliminar productos' 
    });
  }

  next();
};

// Middleware para verificar que solo admin puede crear/editar productos
exports.verificarAdminProductos = (req, res, next) => {
  const rol = req.headers['x-user-role'];

  if (!rol) {
    return res.status(401).json({ 
      success: false,
      mensaje: 'No autenticado. Proporciona tu rol' 
    });
  }

  if (rol !== 'admin') {
    return res.status(403).json({ 
      success: false,
      mensaje: 'Solo administradores pueden crear o modificar productos' 
    });
  }

  next();
};

