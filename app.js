// Servidor e rotas que serão ligadas.

const express = require('express');
const bodyParser = require('body-parser');
const produtoRoutes = require('./routes/produtos');
const categoriaRoutes = require('./routes/categorias');
const usuarioRoutes = require('./routes/usuarios');
const cors = require("cors");


require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Rotas
app.use('/produtos', produtoRoutes);
app.use('/categorias', categoriaRoutes);
app.use('/usuarios', usuarioRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
