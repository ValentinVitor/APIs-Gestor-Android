const db = require('../config/db');

class TarefaModel {
    static criarTarefa(descricao, concluida = false) {
        const query = 'INSERT INTO tarefas (descricao, concluida) VALUES (?, ?)';
        return db.promise().query(query, [descricao, concluida]);
    }

    static obterTarefas() {
        const query = 'SELECT * FROM tarefas';
        return db.promise().query(query);
    }

    static deletarTarefa(id) {
        const query = 'DELETE FROM tarefas WHERE id = ?';
        return db.promise().query(query, [id]);
    }
}

module.exports = TarefaModel;
