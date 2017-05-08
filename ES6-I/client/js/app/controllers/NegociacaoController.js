class NegociacaoController {

    constructor() {
        //o bind mantem a associação de contexto do document ao metoto querySelector
        let $ = document.querySelector.bind(document)

        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')
        this._listaNegociacoes = new ListaNegociacoes()
    }

    adiciona(event) {
        event.preventDefault()

        this._listaNegociacoes.adiciona(this._criaNegociacao())
        this._limpaFormulario()

        console.log(this._listaNegociacoes.negociacoes)

        //Exercices  
        let dataString = '17-05-2016'
        dataString = dataString.split('-').reverse().join('/')

        let numeros = [3, 2, 11, 20, 8, 7]

        numeros.map((item) => {
            if (item % 2 != 0)
                return item * 2
            return item
        })

        //Refactor
        numeros.map((item) => item % 2 != 0 ? item * 2 : item)
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

}