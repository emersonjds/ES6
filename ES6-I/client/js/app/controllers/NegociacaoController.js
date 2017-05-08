class NegociacaoController {

    constructor() {
        //o bind mantem a associação de contexto do document ao metoto querySelector
        let $ = document.querySelector.bind(document)

        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')
    }

    adiciona(event) {
        event.preventDefault()

        let helper = new DateHelper()
        DateHelper.textoParaData(this._inputData.value)

        let negociacao = new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        )

        console.log(negociacao)
        console.log(DateHelper.dataParaTexto(negociacao.data))

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
}