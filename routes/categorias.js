// As rotas definem os pontos finais da API e os controladores responsáveis por cada operação.

const express = require('express');
const CategoriaController = require('../controllers/categoriaController');
const router = express.Router();

router.post('/', CategoriaController.criarCategoria);
router.get('/', CategoriaController.obterCategorias);
router.put('/:id', CategoriaController.atualizarCategoria);
router.delete('/:id', CategoriaController.deletarCategoria);

module.exports = router;
