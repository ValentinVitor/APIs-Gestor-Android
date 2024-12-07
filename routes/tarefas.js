const express = require('express');
const tarefaController = require('../controllers/tarefaController');

const router = express.Router();

router.post('/', tarefaController.criarTarefa);
router.get('/', tarefaController.obterTarefas);
router.delete('/:id', tarefaController.deletarTarefa);

module.exports = router;
