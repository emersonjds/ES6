class ArquivoController {
  constructor() {
    this._inputDados = document.querySelector('.dados-arquivo')
  }

  envia() {
    //cria um Arquivo com as suas propriedades
    let dados = this._inputDados.value.split('/')
      .map((item) => {
        item.toUpperCase()
      })
    
    let arquivo = ArquivoHelper.cria(this._inputDados.value)
    console.log(`Dados do arquivo enviado : ${arquivo.nome}, ${arquivo.tamanho}, ${arquivo.tipo}`)

    this._limpaFormulario()
  }

  _limpaFormulario() {
    this._inputDados.value = ''
    this._inputDados.focus()
  }

}