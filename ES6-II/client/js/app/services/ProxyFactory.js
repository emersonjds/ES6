class ProxyFactory {

  static create(objeto, props, acao) {
    return new Proxy(objeto, {
      //target -> objeto original que esta sendo acessado
      //prop -> propriedade do objeto que esta sendo acessada 
      //receiver -> referencia para o próprio Proxy

      //o get sera chamado sempre que uma propriedade for acessada
      get(target, prop, receiver) {
        if (props.includes(prop) &&  ProxyFactory._ehFuncao(target[prop])) {
          //includes, verifica se a propriedade existe no array ou nao, retornando booleano
          return function () {
            Reflect.apply(target[prop], target, arguments)
            return acao(target)
          }
        }
        return Reflect.get(target, prop, receiver)
        // //chamada da API de reflect
      },
      set(target, prop, value, receiver) {
        if(props.includes(prop)) {
          target[prop] = value
          acao(target)
        }
        return Reflect.set(target, prop, value, receiver)
      }
    })

    //af mantem o contexto léxico do código diferente da utilização de function normal o que torna o contexto nao mais dinamico
    // this._listaNegociacoes = new ListaNegociacoes(model =>
    //     this._negociacoesView.update(model)
    // )
  }

  static _ehFuncao(func) {
    return typeof (func) == typeof (Function)
  }
}




