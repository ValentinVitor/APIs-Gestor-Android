const express = require('express');
const ComentarioController = require('../controllers/comentarioController');

const router = express.Router();

router.post('/', ComentarioController.criarComentario);
router.get('/', ComentarioController.obterComentarios);
router.delete('/:id', ComentarioController.deletarComentario);

module.exports = router;
