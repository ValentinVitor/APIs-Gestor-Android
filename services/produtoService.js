// A camada de serviços contém a lógica de negócios. 
// Ela interage com o modelo e aplica regras de negócio antes de retornar os dados para o controlador.

const ProdutoModel = require('../models/produtoModel');

class ProdutoService {
  static async criarProduto(nome, marca, quantidade, preco, validade, categoria_id) {
    try {
      const [result] = await ProdutoModel.criarProduto(nome, marca, quantidade, preco, validade, categoria_id);
      return result;
    } catch (err) {
      throw new Error('Erro ao criar produto: ' + err.message);
    }
  }

  static async obterProdutos() {
    try {
      const [rows] = await ProdutoModel.obterProdutos();
      return rows;
    } catch (err) {
      throw new Error('Erro ao obter produtos: ' + err.message);
    }
  }

  static async atualizarProduto(id, nome, marca, quantidade, preco, validade, categoria_id) {
    try {
      const [result] = await ProdutoModel.atualizarProduto(id, nome, marca, quantidade, preco, validade, categoria_id);
      return result;
    } catch (err) {
      throw new Error('Erro ao atualizar produto: ' + err.message);
    }
  }

  static async deletarProduto(id) {
    try {
      const [result] = await ProdutoModel.deletarProduto(id);
      return result;
    } catch (err) {
      throw new Error('Erro ao deletar produto: ' + err.message);
    }
  }
}

module.exports = ProdutoService;
