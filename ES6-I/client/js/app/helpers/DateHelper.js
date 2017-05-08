class DateHelper {

  constructor() {
    //case class be instance explode new Error
    throw new Error('DateHelper can not be supported')
  }

  static dataParaTexto(data) {
    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
  }

  //acesso direto com chamada da Classe
  static textoParaData(texto) {
    
    if(!/\d{4}-\d{2}-\d{2}/.test(texto))
      throw new Error('A data deve estar no formato aaaa-mm-dd')
      
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