const express = require("express") //guardar os poderes do pacote express na constante 'express'

const app = express() //chame a constante 'express' para criar uma função e guarda na constante app
const porta = 3333

function mostraPorta() {
    console.log('Servidor criado e rodando na porta', porta)
};

app.listen(porta, mostraPorta) //chame a função listen, informando o endereço da porta, faça escutar o identificador da porta. NÃO TEM PARÊNTESES pois não é o código chamando a função, é o servidor.