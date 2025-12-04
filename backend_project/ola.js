const express = require("express")
const router = express.Router() // criado a configuração da rota

const app = express()
const porta = 3333

function mostraOla(request, response) {
    response.send("Olá, mundo!")
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get("/ola", mostraOla)) // quero que esse app use a rota GET, chame o endereço /ola e que msotre a função mostraOla com a msg
app.listen(porta, mostraPorta)