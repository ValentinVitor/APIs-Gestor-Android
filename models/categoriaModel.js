// O modelo define a estrutura dos dados, incluindo as operações de acesso ao banco de dados (CRUD). 
// Ele encapsula toda a lógica de interação com o banco de dados.

const db = require('../config/db');

class CategoriaModel {
  // Criar uma nova categoria
  static criarCategoria(nome) {
    const query = 'INSERT INTO categorias (nome) VALUES (?)';
    return db.promise().query(query, [nome]);
  }

  // Obter todas as categorias
  static obterCategorias() {
    const query = 'SELECT * FROM categorias';
    return db.promise().query(query);
  }

  // Atualizar uma categoria existente
  static atualizarCategoria(id, nome) {
    const query = 'UPDATE categorias SET nome = ? WHERE id = ?';
    return db.promise().query(query, [nome, id]);
  }

  // Deletar uma categoria
  static deletarCategoria(id) {
    const query = 'DELETE FROM categorias WHERE id = ?';
    return db.promise().query(query, [id]);
  }
}

module.exports = CategoriaModel;
