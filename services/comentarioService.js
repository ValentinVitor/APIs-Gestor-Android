const ComentarioModel = require('../models/comentarioModel');

class ComentarioService {
    static async criarComentario(comentario) {
        try {
            const [result] = await ComentarioModel.criarComentario(comentario);
            return result;
        } catch (err) {
            throw new Error('Erro ao criar comentário: ' + err.message);
        }
    }

    static async obterComentarios() {
        try {
            const [rows] = await ComentarioModel.obterComentarios();
            return rows;
        } catch (err) {
            throw new Error('Erro ao obter comentários: ' + err.message);
        }
    }

    static async deletarComentario(id) {
        try {
            const [result] = await ComentarioModel.deletarComentario(id);
            return result;
        } catch (err) {
            throw new Error('Erro ao deletar comentário: ' + err.message);
        }
    }
}

module.exports = ComentarioService;
