const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const rolesMiddleware = require('../middleware/roles');

// GET - Cualquiera puede ver productos
router.get('/productos', productController.getProductos);

// POST - Solo admin puede crear productos
router.post('/productos', rolesMiddleware.verificarAdminProductos, productController.crearProducto);

// PUT - Solo admin puede actualizar productos
router.put('/productos/:id', rolesMiddleware.verificarAdminProductos, productController.actualizarProducto);

// DELETE - Solo admin puede eliminar productos
router.delete('/productos/:id', rolesMiddleware.verificarAdmin, productController.eliminarProducto);

module.exports = router;

