function formatarJSON(texto) {
  try {
    const obj = JSON.parse(texto);
    return JSON.stringify(obj, null, 2);
  } catch (erro) {
    return "JSON inválido: " + erro.message;
  }
}

// exporta a função para poder usar em outros arquivos
module.exports = formatarJSON;
