// O modelo define a estrutura dos dados, incluindo as operações de acesso ao banco de dados (CRUD). 
// Ele encapsula toda a lógica de interação com o banco de dados.

const db = require('../config/db');

class ProdutoModel {
  static criarProduto(nome, marca, quantidade, preco, validade, categoria_id) {
    const query = 'INSERT INTO produtos (nome, marca, quantidade, preco, validade, categoria_id) VALUES (?, ?, ?, ?, ?, ?)';
    return db.promise().query(query, [nome, marca, quantidade, preco, validade, categoria_id]);
  }

  static obterProdutos() {
    const query = 'SELECT * FROM produtos';
    return db.promise().query(query);
  }

  static atualizarProduto(id, nome, marca, quantidade, preco, validade, categoria_id) {
    const query = 'UPDATE produtos SET nome = ?, marca = ?, quantidade = ?, preco = ?, validade = ?, categoria_id = ? WHERE id = ?';
    return db.promise().query(query, [nome, marca, quantidade, preco, validade, categoria_id, id]);
  }

  static deletarProduto(id) {
    const query = 'DELETE FROM produtos WHERE id = ?';
    return db.promise().query(query, [id]);
  }
}

module.exports = ProdutoModel;
