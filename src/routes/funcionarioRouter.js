const express = require('express');
const router = express.Router();
const controller = require('../controller/funcionarioController');

router.post('/funcionario',controller.postFuncionarios)
router.get('/funcionario',controller.getAllFuncionarios)


module.exports = router
