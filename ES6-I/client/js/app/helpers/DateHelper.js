class DateHelper {

  dataParaTexto(data) {
    return data.getDate()
      + '/' + data.getMonth()
      + '/' + data.getFullYear()
  }

  textoParaData(texto) {
    return new Date(...texto.split('-').map((item, indice) => item - indice % 2))
  }

}

// ". . . " 
//utilização do spreed operator, em que ele explicita que cada item do array vai entrar com o posicionamento direto 
// let data = new Date(...
//   this._inputData.value
//     .split('-')
//     .map((item, indice) => item - indice % 2)
  //af com instrução unica ja é auto retornavel
// )