const mongoose = require('mongoose')
require('dotenv').config()  // ← importa variáveis do .env


async function conectaBancoDeDados() { //js assincrono, para não interromper o fluxo dos outros clientes
    try {
        console.log('Conexao com BD iniciou.')

    await mongoose.connect('process.env.MONGO_URL')

    console.log('Conexão com o banco de dados feita com sucesso!')
    } catch(erro) { //caso contrario, mostre o erro
        console.log('Erro ao conectar com o banco:', erro)
    }
}

module.exports = conectaBancoDeDados