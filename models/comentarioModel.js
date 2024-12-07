const db = require('../config/db');

class ComentarioModel {
    static criarComentario(comentario) {
        const query = 'INSERT INTO comentarios (comentario) VALUES (?)';
        return db.promise().query(query, [comentario]);
    }

    static obterComentarios() {
        const query = 'SELECT * FROM comentarios ORDER BY data_criacao DESC';
        return db.promise().query(query);
    }

    static deletarComentario(id) {
        const query = 'DELETE FROM comentarios WHERE id = ?';
        return db.promise().query(query, [id]);
    }
}

module.exports = ComentarioModel;
