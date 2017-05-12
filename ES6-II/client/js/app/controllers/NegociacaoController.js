class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document)
        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')

        let self = this

        this._listaNegociacoes = new Proxy(new ListaNegociacoes(), {
            //target -> objeto original que esta sendo acessado
            //prop -> propriedade do objeto que esta sendo acessada 
            //receiver -> referencia para o próprio Proxy

            //o get sera chamado sempre que uma propriedade for acessada
            get(target, prop, receiver) {
                if (['adiciona', 'esvazia'].includes(prop) && typeof (target[prop]) == typeof (Function)) {
                    //includes, verifica se a propriedade existe no array ou nao, retornando booleano
                    return function() {
                        Reflect.apply(target[prop], target, arguments)
                        self._negociacoesView.update(target)
                    }
                }
                return Reflect.get(target, prop, receiver)
                // //chamada da API de reflect
            }
        })

        //af mantem o contexto léxico do código diferente da utilização de function normal o que torna o contexto nao mais dinamico
        // this._listaNegociacoes = new ListaNegociacoes(model =>
        //     this._negociacoesView.update(model)
        // )

        this._negociacoesView = new NegociacoesView($('#negociacoesView'))
        this._negociacoesView.update(this._listaNegociacoes)

        this._mensagem = new Mensagem()
        this._mensagemView = new MensagemView($('#mensagemView'))
        this._mensagemView.update(this._mensagem)

    }

    adiciona(event) {

        event.preventDefault()
        this._listaNegociacoes.adiciona(this._criaNegociacao())

        this._mensagem.texto = 'Negociação adicionada com sucesso'
        this._mensagemView.update(this._mensagem)

        this._limpaFormulario()
    }

    _criaNegociacao() {

        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value)
    }

    _limpaFormulario() {

        this._inputData.value = ''
        this._inputQuantidade.value = 1
        this._inputValor.value = 0.0
        this._inputData.focus()
    }

    apaga() {
        this._listaNegociacoes.esvazia()
        this._mensagem.texto = 'Lista de negociacoes apagadas com sucesso'
        this._mensagemView.update(this._mensagem)
    }

}