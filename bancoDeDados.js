const mongoose = require('mongoose');
require('dotenv').config();

async function conectaBancoDeDados() {
    try {
        console.log('Conexao com BD iniciou.');
        await mongoose.connect(process.env.DATABASE_URL);

        console.log('Conexão com o banco de dados feita com sucesso!');
    } catch (erro) {
        console.log("Erro ao conectar com o banco:", erro);
    }
}

module.exports = conectaBancoDeDados;
