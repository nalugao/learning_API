const { v4: uuidv4 } = require("uuid");
const express = require("express"); //inicio do express
const router = express.Router(); //configuração da primeira parta da rota

const conectaBancoDeDados = require("./bancoDeDados"); //ligando ao arquivo banco de dados
conectaBancoDeDados(); //estou chamandoa  função que conecta o BD

const app = express(); //iniciando o App
app.use(express.json());
const porta = 3333; //criandoa porta

//abaixo, criação da lista inicial de mulheres
const listaMulheres = [
  {
    id: "1",
    nome: "Natalia Lugão",
    imagem: "https://avatars.githubusercontent.com/u/188492757?v=4",
    minibio: "Desenvolvedora em formação",
  },
  {
    id: "2",
    nome: "Natalia Lugão",
    imagem: "https://avatars.githubusercontent.com/u/188492757?v=4",
    minibio: "Desenvolvedora em formação",
  },
  {
    id: "3",
    nome: "Natalia Lugão",
    imagem: "https://avatars.githubusercontent.com/u/188492757?v=4",
    minibio: "Desenvolvedora em formação",
  },
];

//abaixo GET
function mostraMulheres(request, response) {
  response.json(listaMulheres);
}

//abaixo POST
function criaMulher(request, response) {
  const novaMulher = {
    id: uuidv4(),
    nome: request.body.nome,
    imagem: request.body.imagem,
    minibio: request.body.minibio,
  };

  listaMulheres.push(novaMulher);

  response.json(listaMulheres);
}

//abaixo PATCH para corrigir informação de um objeto
function corrigeMulher(request, response) {
  function encontraMulher(mulher) {
    if (mulher.id === request.params.id) {
      //encontrar pelo id que for colocado na requisição
      return mulher;
    }
  }
  const mulherEncontrada = listaMulheres.find(encontraMulher);

  if (request.body.nome) {
    mulherEncontrada.nome = request.body.nome;
  }

  if (request.body.minibio) {
    mulherEncontrada.minibio = request.body.minibio;
  }

  if (request.body.imagem) {
    mulherEncontrada.imagem = request.body.imagem;
  }

  response.json(listaMulheres);
}

//abaixo DELETE
function deletaMulher(request, response) {
  function todasMenosEla(mulher) {
    if (mulher.id !== request.params.id) {
      return mulher;
    }
  }

  const mulheresQueFicam = listaMulheres.filter(todasMenosEla);

  response.json(mulheresQueFicam);
}
//Função Porta
function mostraPorta() {
  console.log("O servidor está sendo transmitido na porta, ", porta);
}

app.use(router.get("/mulheres", mostraMulheres)); //configuração da rota GET /mulheres
app.use(router.post("/mulheres", criaMulher)); //configuração de rota POST /mulheres
app.use(router.patch("/mulheres/:id", corrigeMulher)); //configurei rota PATCH /mulhere/:id
app.use(router.delete("/mulheres/:id", deletaMulher)); // configurei rota DELETE /milher:id

app.listen(porta, mostraPorta); // servidor ouvindoa  porta
