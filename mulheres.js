const express = require("express"); //inicio do express
const router = express.Router(); //configuração da primeira parta da rota

const conectaBancoDeDados = require("./bancoDeDados"); //ligando ao arquivo banco de dados
conectaBancoDeDados(); //estou chamandoa  função que conecta o BD

const Mulher = require("./mulherModel");
const mulherModel = require("./mulherModel");

const app = express(); //iniciando o App
app.use(express.json());
const porta = 3333; //criandoa porta

//abaixo GET
async function mostraMulheres(request, response) {
  try {
    const mulheresVindasDoBancoDeDados = await Mulher.find();

    response.json(mulheresVindasDoBancoDeDados);
  } catch (erro) {
    console.log(erro);
  }
  response.json();
}

//abaixo POST
async function criaMulher(request, response) {
  const novaMulher = new Mulher({
    nome: request.body.nome,
    imagem: request.body.imagem,
    minibio: request.body.minibio,
    citacao: request.body.citacao,
  });
  try {
    const mulherCriada = await novaMulher.save();
    response.status(201).json(mulherCriada); //201 confirma criação
  } catch (erro) {
    console.log(erro);
  }
}

//abaixo PATCH para corrigir informação de um objeto
async function corrigeMulher(request, response) {
  try {
    const mulherEncontrada = await Mulher.findById(request.params.id);

    if (request.body.nome) {
      mulherEncontrada.nome = request.body.nome;
    }

    if (request.body.minibio) {
      mulherEncontrada.minibio = request.body.minibio;
    }

    if (request.body.imagem) {
      mulherEncontrada.imagem = request.body.imagem;
    }

    if (request.body.citacao) {
      mulherEncontrada.citacao = request.body.citacao;
    }

    const mulherAtualizadaNoBD = await mulherEncontrada.save()

    response.json(mulherAtualizadaNoBD)

  } catch (erro) {
    console.log(erro);
  }
}

//abaixo DELETE
async function deletaMulher(request, response) {
  try {
    await Mulher.findByIdAndDelete(request.params.id)
    response.json({ mensagem: 'Mulher deletada com sucesso!'})
  } catch (erro) {
    console.log(erro)
  }
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
