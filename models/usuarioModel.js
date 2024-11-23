// O modelo de usuário vai lidar com a interação com o banco de dados, incluindo a criação de um novo usuário e a verificação de suas credenciais (email e senha).

const db = require("../config/db");
const bcrypt = require("bcryptjs");

class UsuarioModel {
  // Criar um novo usuário
  static async criarUsuario(nome, email, senha) {
    const hashSenha = await bcrypt.hash(senha, 10); // Gerando o hash da senha
    const query = "INSERT INTO usuarios (nome, email, senha_hash) VALUES (?, ?, ?)";
    return db.promise().query(query, [nome, email, hashSenha]);
  }

 // Atualiza dados do usuário pelo ID
 static async atualizarUsuario(id, nome, email, senha) {
  const hashSenha = await bcrypt.hash(senha, 10); // Gerando o hash da nova senha
  const query = "UPDATE usuarios SET nome = ?, email = ?, senha_hash = ? WHERE id = ?";
  return db.promise().query(query, [nome, email, hashSenha, id]); // Substitui os valores na query
}


  // Verificar se o usuário existe com base no email
  static obterUsuarioPorEmail(email) {
    const query = "SELECT * FROM usuarios WHERE email = ?";
    return db.promise().query(query, [email]);
  }

  // Obter um usuário pelo ID
  static obterUsuarioPorId(id) {
    const query = "SELECT * FROM usuarios WHERE id = ?";
    return db.promise().query(query, [id]);
  }
}

module.exports = UsuarioModel;
