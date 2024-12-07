const TarefaService = require('../services/tarefaService');

class TarefaController {
    static async criarTarefa(req, res) {
        try {
            const { descricao, concluida } = req.body;
            const result = await TarefaService.criarTarefa(descricao, concluida);
            res.status(201).json({ message: 'Tarefa criada com sucesso!', data: result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async obterTarefas(req, res) {
        try {
            const tarefas = await TarefaService.obterTarefas();
            res.status(200).json(tarefas);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async atualizarTarefa(req, res) {
        try {
            const { id } = req.params;
            const { descricao, concluida } = req.body;
            const result = await TarefaService.atualizarTarefa(id, descricao, concluida);
            res.status(200).json({ message: 'Tarefa atualizada com sucesso!', data: result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async deletarTarefa(req, res) {
        try {
            const { id } = req.params;
            const result = await TarefaService.deletarTarefa(id);
            res.status(200).json({ message: 'Tarefa deletada com sucesso!', data: result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = TarefaController;
