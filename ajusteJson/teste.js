const fs = require('fs');
const formatarJSON = require('./formatador.js');

const textoBaguncado = fs.readFileSync('./entrada.json', 'utf8');

const resultado = formatarJSON(textoBaguncado);

console.log(resultado);
