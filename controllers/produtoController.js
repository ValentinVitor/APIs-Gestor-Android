// O controlador recebe as requisições da API, chama o serviço correspondente e retorna a resposta ao cliente.

const ProdutoService = require('../services/produtoService');

class ProdutoController {
  static async criarProduto(req, res) {
    try {
      const { nome, marca, quantidade, preco, validade, categoria_id } = req.body;
      const result = await ProdutoService.criarProduto(nome, marca, quantidade, preco, validade, categoria_id);
      res.status(201).json({ message: 'Produto criado com sucesso!', data: result });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async obterProdutos(req, res) {
    try {
      const produtos = await ProdutoService.obterProdutos();
      res.status(200).json(produtos);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async atualizarProduto(req, res) {
    try {
      const { id } = req.params;
      const { nome, marca, quantidade, preco, validade, categoria_id } = req.body;
      const result = await ProdutoService.atualizarProduto(id, nome, marca, quantidade, preco, validade, categoria_id);
      res.status(200).json({ message: 'Produto atualizado com sucesso!', data: result });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async deletarProduto(req, res) {
    try {
      const { id } = req.params;
      const result = await ProdutoService.deletarProduto(id);
      res.status(200).json({ message: 'Produto deletado com sucesso!', data: result });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = ProdutoController;
