class NegociacaoService {

  constructor() {
    this._http = new HttpService()
  }

  obterNegociacoesDaSemana() {

    return this._http.get('negociacoes/semana')
      .then(negociacoes => {
        return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))
      })
      .catch((error) => {
        console.log(error)
        throw new Error('Nao foi possivel carregar os dados da semana')
      })

  }

  obterNegociacoesDaSemanaAnterior() {

    return this._http.get('negociacoes/anterior')
      .then(negociacoes => {
        return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))
      })
      .catch((error) => {
        console.log(error)
        throw new Error('Nao foi possivel carregar os dados da anterior')
      })
  }

  obterNegociacoesDaSemanaRetrasada() {

    return this._http.get('negociacoes/retrasada')
      .then(negociacoes => {
        return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))
      })
      .catch((error) => {
        console.log(error)
        throw new Error('Nao foi possivel carregar os dados da retrasada')
      })
  }

  obterNegociacoes() {
    return Promise.all([
      this.obterNegociacoesDaSemana(),
      this.obterNegociacoesDaSemanaAnterior(),
      this.obterNegociacoesDaSemanaRetrasada(),
    ]).then(periodos => {
      let negociacoes = periodos
        .reduce((dados, periodo) => dados.concat(periodo), [])
      return negociacoes
    }).catch((error) => {
      throw new Error(error)
    })
  }

}