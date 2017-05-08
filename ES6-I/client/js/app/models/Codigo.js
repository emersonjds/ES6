class Codigo {
  constructor(text) {
    if(!this._valida(text))
      throw new Error(`O texto ${text} nao é um codigo valido`)

    this._text = text
  }

  _valida(text) {
    return /\D{3}-\D{2}-\d{2}/.test(text)
  }

  get text() {
    return this._text
  }

}