const ComentarioService = require('../services/comentarioService');

class ComentarioController {
    static async criarComentario(req, res) {
        try {
            const { comentario } = req.body;

            if (!comentario) {
                return res.status(400).json({ error: 'Comentário é obrigatório!' });
            }

            const result = await ComentarioService.criarComentario(comentario);
            res.status(201).json({ message: 'Comentário criado com sucesso!', data: result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async obterComentarios(req, res) {
        try {
            const comentarios = await ComentarioService.obterComentarios();
            res.status(200).json(comentarios);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async deletarComentario(req, res) {
        try {
            const { id } = req.params;

            const result = await ComentarioService.deletarComentario(id);
            res.status(200).json({ message: 'Comentário deletado com sucesso!', data: result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = ComentarioController;
