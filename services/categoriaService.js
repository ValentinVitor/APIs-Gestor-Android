// A camada de serviços contém a lógica de negócios. 
// Ela interage com o modelo e aplica regras de negócio antes de retornar os dados para o controlador.

const CategoriaModel = require('../models/categoriaModel');

class CategoriaService {
  // Criar uma nova categoria
  static async criarCategoria(nome) {
    try {
      const [result] = await CategoriaModel.criarCategoria(nome);
      return result;
    } catch (err) {
      throw new Error('Erro ao criar categoria: ' + err.message);
    }
  }

  // Obter todas as categorias
  static async obterCategorias() {
    try {
      const [rows] = await CategoriaModel.obterCategorias();
      return rows;
    } catch (err) {
      throw new Error('Erro ao obter categorias: ' + err.message);
    }
  }

  // Atualizar uma categoria
  static async atualizarCategoria(id, nome) {
    try {
      const [result] = await CategoriaModel.atualizarCategoria(id, nome);
      return result;
    } catch (err) {
      throw new Error('Erro ao atualizar categoria: ' + err.message);
    }
  }

  // Deletar uma categoria
  static async deletarCategoria(id) {
    try {
      const [result] = await CategoriaModel.deletarCategoria(id);
      return result;
    } catch (err) {
      throw new Error('Erro ao deletar categoria: ' + err.message);
    }
  }
}

module.exports = CategoriaService;
