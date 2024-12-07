const express = require('express');
const anotacaoController = require('../controllers/anotacaoController');

const router = express.Router();

router.post('/', anotacaoController.criarAnotacao);
router.get('/', anotacaoController.obterAnotacoes);
router.delete('/:id', anotacaoController.deletarAnotacao);

module.exports = router;
