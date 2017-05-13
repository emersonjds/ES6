class NegociacaoFactory {

  static create(tipoNegociacao, dados) {
    if (tipoNegociacao == 'opcao') {
      return new NegociacaoOpcao(dados.data, dados.quantidade, dados.valor)
    }
    return new NegociacaoAcao(dados.data, dados.quantidade.dados.valor)
  }
}

let n = NegociacaoFactory.create('acao', { data: new Date(), 'quantidade': 2, 'valor': 34.3 })