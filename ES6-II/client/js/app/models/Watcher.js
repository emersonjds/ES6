class Watcher {
  constructor() {
    this._segundos = 0

    //contexto lexico nao sera aplicado retornando NaN
    setInterval(function() {
      console.log(this._segundos++)
    }, 1000)


    //contexto lexico sera aplicado uma vez que nao a mais dinamização com uso da Arrow function
    setInterval(() => {
      console.log(this._segundos++)
    }, 1000)
  }
}