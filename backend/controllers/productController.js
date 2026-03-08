const db = require('../config/db');

exports.getProductos = (req, res) => {
  try {
    const { buscar } = req.query;

    let sql = 'SELECT * FROM productos';
    let params = [];

    if (buscar) {
      sql += ' WHERE nombre LIKE ? OR descripcion LIKE ?';
      const searchTerm = `%${buscar}%`;
      params = [searchTerm, searchTerm];
    }

    db.query(sql, params, (err, result) => {
      if (err) {
        return res.status(500).json({ 
          success: false,
          mensaje: 'Error al consultar productos' 
        });
      }
      res.json({ 
        success: true,
        productos: result 
      });
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      mensaje: 'Error en el servidor' 
    });
  }
};

exports.crearProducto = (req, res) => {
  try {
    const { nombre, precio, stock, descripcion } = req.body;

    // Validaciones
    if (!nombre || !precio || stock === undefined || !descripcion) {
      return res.status(400).json({ 
        success: false,
        mensaje: 'Por favor completa todos los campos' 
      });
    }

    if (isNaN(precio) || precio <= 0) {
      return res.status(400).json({ 
        success: false,
        mensaje: 'El precio debe ser un número válido mayor a 0' 
      });
    }

    if (isNaN(stock) || stock < 0) {
      return res.status(400).json({ 
        success: false,
        mensaje: 'El stock debe ser un número válido' 
      });
    }

    const sql = 'INSERT INTO productos (nombre, precio, stock, descripcion) VALUES (?, ?, ?, ?)';

    db.query(sql, [nombre, precio, stock, descripcion], (err, result) => {
      if (err) {
        return res.status(500).json({ 
          success: false,
          mensaje: 'Error al crear producto' 
        });
      }
      res.status(201).json({ 
        success: true,
        mensaje: 'Producto creado correctamente',
        producto: { id: result.insertId, nombre, precio, stock, descripcion }
      });
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      mensaje: 'Error en el servidor' 
    });
  }
};

exports.actualizarProducto = (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, precio, stock, descripcion } = req.body;

    if (!nombre || !precio || stock === undefined || !descripcion) {
      return res.status(400).json({ 
        success: false,
        mensaje: 'Por favor completa todos los campos' 
      });
    }

    if (isNaN(precio) || precio <= 0) {
      return res.status(400).json({ 
        success: false,
        mensaje: 'El precio debe ser un número válido mayor a 0' 
      });
    }

    if (isNaN(stock) || stock < 0) {
      return res.status(400).json({ 
        success: false,
        mensaje: 'El stock debe ser un número válido' 
      });
    }

    const sql = 'UPDATE productos SET nombre=?, precio=?, stock=?, descripcion=? WHERE id=?';

    db.query(sql, [nombre, precio, stock, descripcion, id], (err, result) => {
      if (err) {
        return res.status(500).json({ 
          success: false,
          mensaje: 'Error al actualizar producto' 
        });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ 
          success: false,
          mensaje: 'Producto no encontrado' 
        });
      }

      res.json({ 
        success: true,
        mensaje: 'Producto actualizado correctamente' 
      });
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      mensaje: 'Error en el servidor' 
    });
  }
};

exports.eliminarProducto = (req, res) => {
  try {
    const { id } = req.params;

    const sql = 'DELETE FROM productos WHERE id=?';

    db.query(sql, [id], (err, result) => {
      if (err) {
        return res.status(500).json({ 
          success: false,
          mensaje: 'Error al eliminar producto' 
        });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ 
          success: false,
          mensaje: 'Producto no encontrado' 
        });
      }

      res.json({ 
        success: true,
        mensaje: 'Producto eliminado correctamente' 
      });
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      mensaje: 'Error en el servidor' 
    });
  }
};

