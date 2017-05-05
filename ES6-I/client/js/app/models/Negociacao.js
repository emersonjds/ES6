class Negociacao {

  constructor(data, quantidade, valor) {
    this._data = new Date(data.getTime())
    this._quantidade = quantidade
    this._valor = valor
    Object.freeze(this) //congelando objeto para nao permitir alteração de propriedades com uma nova instancia
  }

  //criacao de acesso getter 
  // a utilização desta propriedade nao permite que o atributo seja setado utilizando a chamada convencional
  get volume() {
    return this._quantidade * this._valor
  }
  
  get data() {
    return new Date(this._data.getTime())
    // o object.freeze nao funciona em um outro objeto data, desta forma é necessario utilizar esta opção 
  }

  get quantidade() {
    return this._quantidade
  }

  get valor() {
    return this._valor
  }

}