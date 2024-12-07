const AnotacaoModel = require('../models/anotacaoModel');

class AnotacaoService {
    static async criarAnotacao(conteudo) {
        try {
            const [result] = await AnotacaoModel.criarAnotacao(conteudo);
            return result;
        } catch (err) {
            throw new Error('Erro ao criar anotação: ' + err.message);
        }
    }

    static async obterAnotacoes() {
        try {
            const [rows] = await AnotacaoModel.obterAnotacoes();
            return rows;
        } catch (err) {
            throw new Error('Erro ao obter anotações: ' + err.message);
        }
    }

    static async deletarAnotacao(id) {
        try {
            const [result] = await AnotacaoModel.deletarAnotacao(id);
            return result;
        } catch (err) {
            throw new Error('Erro ao deletar anotação: ' + err.message);
        }
    }
}

module.exports = AnotacaoService;
