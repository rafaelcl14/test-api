const express = require('express');
const router = express.Router();

const ClientesController = require('../controllers/clientes_controller');

router.get('/', ClientesController.getClientes);

router.post('/', ClientesController.postClientes);



module.exports = router;
