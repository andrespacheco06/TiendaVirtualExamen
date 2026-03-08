const db = require('../config/db');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  try {
    const { nombre, email, password, rol } = req.body;

    // Validaciones
    if (!nombre || !email || !password || !rol) {
      return res.status(400).json({ 
        success: false,
        mensaje: 'Por favor completa todos los campos' 
      });
    }

    if (!['admin', 'vendedor'].includes(rol)) {
      return res.status(400).json({ 
        success: false,
        mensaje: 'Rol inválido. Usa: admin o vendedor' 
      });
    }

    // Hashear contraseña
    const hash = await bcrypt.hash(password, 10);

    const sql = 'INSERT INTO usuarios (nombre, email, password, rol) VALUES (?, ?, ?, ?)';

    db.query(sql, [nombre, email, hash, rol], (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(400).json({ 
            success: false,
            mensaje: 'El email ya está registrado' 
          });
        }
        return res.status(500).json({ 
          success: false,
          mensaje: 'Error al registrar usuario' 
        });
      }
      res.status(201).json({ 
        success: true,
        mensaje: 'Usuario registrado correctamente',
        usuario: { id: result.insertId, nombre, email, rol }
      });
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      mensaje: 'Error en el servidor' 
    });
  }
};

exports.login = (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ 
        success: false,
        mensaje: 'Email y contraseña requeridos' 
      });
    }

    const sql = 'SELECT * FROM usuarios WHERE email = ?';

    db.query(sql, [email], async (err, result) => {
      if (err) {
        return res.status(500).json({ 
          success: false,
          mensaje: 'Error al consultar base de datos' 
        });
      }

      if (result.length === 0) {
        return res.status(401).json({ 
          success: false,
          mensaje: 'Usuario no existe' 
        });
      }

      const user = result[0];

      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        return res.status(401).json({ 
          success: false,
          mensaje: 'Contraseña incorrecta' 
        });
      }

      // Respuesta exitosa sin la contraseña hasheada
      res.json({ 
        success: true,
        mensaje: 'Login correcto',
        usuario: {
          id: user.id,
          nombre: user.nombre,
          email: user.email,
          rol: user.rol
        }
      });
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      mensaje: 'Error en el servidor' 
    });
  }
};

