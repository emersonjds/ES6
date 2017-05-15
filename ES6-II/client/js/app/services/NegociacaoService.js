class NegociacaoService {

  constructor() {
    this._http = new HttpService()
  }

  obterNegociacoesDaSemana() {
    return new Promise((resolve, reject) => {
      this._http.get('negociacoes/semana')
        .then(negociacoes => {
          resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
        })
        .catch((error) => {
          console.log(error)
          reject('Nao foi possivel carregar os dados da semana')
        })
    })
  }

  obterNegociacoesDaSemanaAnterior() {

    return new Promise((resolve, reject) => {
      this._http.get('negociacoes/anterior')
        .then(negociacoes => {
          resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
        })
        .catch((error) => {
          console.log(error)
          reject('Nao foi possivel carregar os dados da semana')
        })
    })
  }

  obterNegociacoesDaSemanaRetrasada() {

    return new Promise((resolve, reject) => {
      this._http.get('negociacoes/retrasada')
        .then(negociacoes => {
          resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
        })
        .catch((error) => {
          console.log(error)
          reject('Nao foi possivel carregar os dados da semana')
        })
    })
  }

}