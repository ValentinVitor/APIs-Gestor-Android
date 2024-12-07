const AnotacaoService = require('../services/anotacaoService');

class AnotacaoController {
    static async criarAnotacao(req, res) {
        try {
            const { conteudo } = req.body;
            const result = await AnotacaoService.criarAnotacao(conteudo);
            res.status(201).json({ message: 'Anotação criada com sucesso!', data: result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async obterAnotacoes(req, res) {
        try {
            const anotacoes = await AnotacaoService.obterAnotacoes();
            res.status(200).json(anotacoes);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async deletarAnotacao(req, res) {
        try {
            const { id } = req.params;
            const result = await AnotacaoService.deletarAnotacao(id);
            res.status(200).json({ message: 'Anotação deletada com sucesso!', data: result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = AnotacaoController;
