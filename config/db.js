const mysql = require('mysql2');

// Configuração do banco de dados
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "gestor_android"

});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL!');
});

module.exports = connection;
