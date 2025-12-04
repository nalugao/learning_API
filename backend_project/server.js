const express = require("express") //guardar o pacote express na constante 'express'

const app = express() //chame a função 'express' para criar uma função e guarda na constante app
const porta = 3333

function mostraPorta() {
    console.log(`Servidor criado e rodando em http://localhost:3333`)
};

app.listen(porta, mostraPorta) //chame a função listen, informando o endereço da porta, faça escutar o identificador da porta. NÃO TEM PARÊNTESES pois não é o código chamando a função, é o servidor.