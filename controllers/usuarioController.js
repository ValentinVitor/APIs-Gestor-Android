// O controlador vai receber as requisições de login, chamar o serviço correspondente e retornar a resposta adequada.

const UsuarioService = require('../services/usuarioService');

class UsuarioController {
  // Criar um novo usuário
  static async criarUsuario(req, res) {
    try {
      const { nome, email, senha } = req.body;
      const result = await UsuarioService.criarUsuario(nome, email, senha);
      res.status(201).json({ message: 'Usuário criado com sucesso!', data: result });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }


  // Atualiza dados do usuário
  static async atualizarUsuario(req, res) {
    try {
      const { nome, email, senha } = req.body;
      const id = req.params.id; // O id será passado como parâmetro na URL (exemplo: /usuarios/:id)

      if (!id) {
        return res.status(400).json({ error: 'ID do usuário é obrigatório' });
      }

      const result = await UsuarioService.atualizarUsuario(id, nome, email, senha);
      res.status(200).json({ message: 'Usuário atualizado com sucesso!', data: result });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // Login do usuário
  static async login(req, res) {
    try {
      const { email, senha } = req.body;
      const { token, nome } = await UsuarioService.autenticarUsuario(email, senha);
      res.status(200).json({ message: 'Login realizado com sucesso!', token, nome });
    } catch (err) {
      res.status(401).json({ error: err.message });
    }
  }

  // Verificar se o token JWT é válido
  static async verificarToken(req, res) {
    try {
      const token = req.headers.authorization.split(' ')[1]; // O token vem no header "Authorization"
      const decoded = await UsuarioService.verificarToken(token);
      res.status(200).json({ message: 'Token válido', decoded });
    } catch (err) {
      res.status(401).json({ error: err.message });
    }
  }
}

module.exports = UsuarioController;
