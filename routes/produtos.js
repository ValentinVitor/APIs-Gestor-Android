// As rotas definem os pontos finais da API e os controladores responsáveis por cada operação.

const express = require('express');
const ProdutoController = require('../controllers/produtoController');
const router = express.Router();

router.post('/', ProdutoController.criarProduto);
router.get('/', ProdutoController.obterProdutos);
router.put('/:id', ProdutoController.atualizarProduto);
router.delete('/:id', ProdutoController.deletarProduto);

module.exports = router;
