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

        // ". . . " 
        //utilização do spreed operator, em que ele explicita que cada item do array vai entrar com o posicionamento direto 
        let data = new Date(...
            this._inputData.value
                .split('-')
                .map((item, indice) => item - indice % 2)
                //af com instrução unica ja é auto retornavel
        )

        let negociacao = new Negociacao (
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        )

        console.log(negociacao)

    }




}