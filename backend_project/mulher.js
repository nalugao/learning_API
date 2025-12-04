const express = require("express");
const router = express.Router()
const app = express();
const porta = 3333;

function mostraMulher(req, res) {
  res.json({
    nome: 'Natalia Lugão',
    imagem: 'https://avatars.githubusercontent.com/u/188492757?v=4',
    minibio: 'Desenvolvedora em formação'
  });
}

function mostraPorta() {
  console.log(`Servidor criado e rodando em http://localhost:${porta}/mulher`);
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)
