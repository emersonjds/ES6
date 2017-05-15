class NegociacaoService {

  obterNegociacoesDaSemana() {

    return new Promise((resolve, reject) => {

      let xhr = new XMLHttpRequest()

      xhr.open('GET', 'negociacoes/semana')
      //config
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.responseText)
              .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
          } else {
            console.log(xhr.responseText)
            reject('Nao foi possivel receber as negociacoes da semana')
          }
        }
      }
      xhr.send()
    })
  }

  obterNegociacoesDaSemanaAnterior() {

    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest()

      xhr.open('GET', 'negociacoes/anterior')
      //config
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.responseText)
              .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
          } else {
            console.log(xhr.responseText)
            reject('Nao foi possivel receber as negociacoes da semana')
          }
        }
      }
      xhr.send()
    })
  }

  obterNegociacoesDaSemanaRetrasada() {

    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest()

      xhr.open('GET', 'negociacoes/retrasada')
      //config
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.responseText)
              .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
          } else {
            console.log(xhr.responseText)
            reject('Nao foi possivel receber as negociacoes da semana')
          }
        }
      }
      xhr.send()
    })
  }

}