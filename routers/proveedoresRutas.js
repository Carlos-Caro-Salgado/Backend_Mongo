const express = require('express');
const router = express.Router();
const proveedorController = require('../controllers/proveedorController');

// Rutas del Crud: agregar, modificar, eliminar y buscar

router.post('/', proveedorController.agregarProveedores);
router.get('/', proveedorController.mostrarProveedores);
router.get('/:id', proveedorController.buscarProveedores);
router.put('/:id', proveedorController.modificarProveedores);
//router.patch('/:id', proveedorController.editarProveedores);
router.delete('/:id', proveedorController.eliminarProveedores);



module.exports = router;