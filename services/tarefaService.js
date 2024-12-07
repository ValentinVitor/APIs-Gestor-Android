const TarefaModel = require('../models/tarefaModel');

class TarefaService {
    static async criarTarefa(descricao, concluida = false) {
        try {
            const [result] = await TarefaModel.criarTarefa(descricao, concluida);
            return result;
        } catch (err) {
            throw new Error('Erro ao criar tarefa: ' + err.message);
        }
    }

    static async obterTarefas() {
        try {
            const [rows] = await TarefaModel.obterTarefas();
            return rows;
        } catch (err) {
            throw new Error('Erro ao obter tarefas: ' + err.message);
        }
    }

    static async atualizarTarefa(id, descricao, concluida) {
        try {
            const [result] = await TarefaModel.atualizarTarefa(id, descricao, concluida);
            return result;
        } catch (err) {
            throw new Error('Erro ao atualizar tarefa: ' + err.message);
        }
    }

    static async deletarTarefa(id) {
        try {
            const [result] = await TarefaModel.deletarTarefa(id);
            return result;
        } catch (err) {
            throw new Error('Erro ao deletar tarefa: ' + err.message);
        }
    }
}

module.exports = TarefaService;
