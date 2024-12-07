// Servidor e rotas que serão ligadas.

const express = require('express');
const bodyParser = require('body-parser');
const produtoRoutes = require('./routes/produtos');
const categoriaRoutes = require('./routes/categorias');
const usuarioRoutes = require('./routes/usuarios');
const tarefasRoutes = require('./routes/tarefas');
const anotacoesRoutes = require('./routes/anotacoes');
const comentariosRoutes = require('./routes/comentarios');

const cors = require("cors");

// Configuração do Servidor
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

app.use('/produtos', produtoRoutes);
app.use('/categorias', categoriaRoutes);
app.use('/usuarios', usuarioRoutes);
app.use('/tarefas', tarefasRoutes);
app.use('/anotacoes', anotacoesRoutes);
app.use('/comentarios', comentariosRoutes)

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
