const express = require('express');
const UsuarioController = require('../controllers/usuarioController');
const router = express.Router();

router.post('/register', UsuarioController.criarUsuario);
router.post('/login', UsuarioController.login);

// Rota para verificar se o token JWT é válido
router.get('/verify-token', UsuarioController.verificarToken);

module.exports = router;
