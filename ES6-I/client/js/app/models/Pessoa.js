class Pessoa {

  constructor(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
  }

  obtemNome() {
    return this.nome + ' ' + this.sobrenome
  }

}