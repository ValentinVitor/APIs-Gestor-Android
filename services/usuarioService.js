// A camada de serviço contém a lógica de negócios, incluindo a validação das credenciais do usuário e a geração do token JWT.

const UsuarioModel = require('../models/usuarioModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class UsuarioService {
    // Criar um novo usuário
    static async criarUsuario(nome, email, senha) {
        try {
            const [result] = await UsuarioModel.criarUsuario(nome, email, senha);
            return result;
        } catch (err) {
            throw new Error('Erro ao criar usuário: ' + err.message);
        }
    }

    // Autenticar um usuário
    static async autenticarUsuario(email, senha) {
        try {
            // Verificar se o usuário existe
            const [rows] = await UsuarioModel.obterUsuarioPorEmail(email);
            if (rows.length === 0) {
                throw new Error('Usuário não encontrado');
            }

            const usuario = rows[0];

            // Verificar a senha
            const senhaValida = await bcrypt.compare(senha, usuario.senha);
            if (!senhaValida) {
                throw new Error('Senha inválida');
            }

            // Gerar o token JWT
            const token = jwt.sign(
                { id: usuario.id, nome: usuario.nome, email: usuario.email },
                process.env.JWT_SECRET, // Segredo para assinar o JWT (configure no .env)
                { expiresIn: '1h' } // O token expira em 1 hora
            );

            return { token };
        } catch (err) {
            throw new Error('Erro na autenticação: ' + err.message);
        }
    }

    // Verificar se o token JWT é válido
    static verificarToken(token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            return decoded;
        } catch (err) {
            throw new Error('Token inválido ou expirado');
        }
    }
}

module.exports = UsuarioService;
