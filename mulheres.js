const express = require("express");
const router = express.Router();

const app = express();
const porta = 3333;

const listaMulheres = [
  {
    nome: "Natalia Lugão",
    imagem: "https://avatars.githubusercontent.com/u/188492757?v=4",
    minibio: "Desenvolvedora em formação",
  },
  {
    nome: "Natalia Lugão",
    imagem: "https://avatars.githubusercontent.com/u/188492757?v=4",
    minibio: "Desenvolvedora em formação",
  },
  {
    nome: "Natalia Lugão",
    imagem: "https://avatars.githubusercontent.com/u/188492757?v=4",
    minibio: "Desenvolvedora em formação",
  },
];

function mostraMulheres(request, response) {
  response.json(listaMulheres);
}

function mostraPorta() {
  console.log(
    `O servidor está sendo transmitido em http://localhost:${3333}/mulheres`
  );
}

app.use(router.get("/mulheres", mostraMulheres));
app.listen(porta, mostraPorta);
