class View {

  constructor(elemento) {
    this._elemento = elemento
  }

  template() {
    throw new Error('É necessario implementar o metodo')
  }

  update(model) {
    this._elemento.innerHTML = this.template(model)
  }

}