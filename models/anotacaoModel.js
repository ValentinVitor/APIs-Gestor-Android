const db = require('../config/db');

class AnotacaoModel {
    static criarAnotacao(conteudo) {
        const query = 'INSERT INTO anotacoes (conteudo) VALUES (?)';
        return db.promise().query(query, [conteudo]);
    }

    static obterAnotacoes() {
        const query = 'SELECT * FROM anotacoes';
        return db.promise().query(query);
    }

    static deletarAnotacao(id) {
        const query = 'DELETE FROM anotacoes WHERE id = ?';
        return db.promise().query(query, [id]);
    }
}

module.exports = AnotacaoModel;
