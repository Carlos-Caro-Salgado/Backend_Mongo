const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Rutas del Crud: agregar, modificar, eliminar y buscar

router.post('/', clienteController.agregarClientes);
router.get('/', clienteController.mostrarClientes);
router.get('/:id', clienteController.buscarClientes);
router.put('/:id', clienteController.modificarClientes);
//router.patch('/:id', clienteController.editarClientes);
router.delete('/:id', clienteController.eliminarClientes);




module.exports = router;