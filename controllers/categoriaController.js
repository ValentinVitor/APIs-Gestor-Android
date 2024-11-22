// O controlador recebe as requisições da API, chama o serviço correspondente e retorna a resposta ao cliente.

const CategoriaService = require('../services/categoriaService');

class CategoriaController {
  // Criar uma nova categoria
  static async criarCategoria(req, res) {
    try {
      const { nome } = req.body;
      const result = await CategoriaService.criarCategoria(nome);
      res.status(201).json({ message: 'Categoria criada com sucesso!', data: result });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // Obter todas as categorias
  static async obterCategorias(req, res) {
    try {
      const categorias = await CategoriaService.obterCategorias();
      res.status(200).json(categorias);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // Atualizar uma categoria existente
  static async atualizarCategoria(req, res) {
    try {
      const { id } = req.params;
      const { nome } = req.body;
      const result = await CategoriaService.atualizarCategoria(id, nome);
      res.status(200).json({ message: 'Categoria atualizada com sucesso!', data: result });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // Deletar uma categoria
  static async deletarCategoria(req, res) {
    try {
      const { id } = req.params;
      const result = await CategoriaService.deletarCategoria(id);
      res.status(200).json({ message: 'Categoria deletada com sucesso!', data: result });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = CategoriaController;
