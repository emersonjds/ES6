class NegociacaoService {

  obterNegociacoesDaSemana(callback) {
    let xhr = new XMLHttpRequest()

    xhr.open('GET', 'negociacoes/semana')
    //config
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          callback(null, JSON.parse(xhr.responseText)
            .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
        } else {
          console.log(xhr.responseText)
          callback('Nao foi possivel receber as negociacoes da semana', null)
        }
      }
    }
    xhr.send()
  }

  obterNegociacoesDaSemanaAnterior(callback) {
    let xhr = new XMLHttpRequest()

    xhr.open('GET', 'negociacoes/anterior')
    //config
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          callback(null, JSON.parse(xhr.responseText)
            .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
        } else {
          console.log(xhr.responseText)
          callback('Nao foi possivel receber as negociacoes da semana', null)
        }
      }
    }
    xhr.send()
  }

  obterNegociacoesDaSemanaRetrasada(callback) {
    let xhr = new XMLHttpRequest()

    xhr.open('GET', 'negociacoes/retrasada')
    //config
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          callback(null, JSON.parse(xhr.responseText)
            .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
        } else {
          console.log(xhr.responseText)
          callback('Nao foi possivel receber as negociacoes da semana', null)
        }
      }
    }
    xhr.send()
  }

}