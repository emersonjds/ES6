class NegociacoesView {

  constructor(elemento) {
    this._elemento = elemento
  }

  _template(model) {
    return `
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>DATA</th>
          <th>QUANTIDADE</th>
          <th>VALOR</th>
          <th>VOLUME</th>
        </tr>
      </thead>

      <tbody>
        ${model.negociacoes.map(n =>
        //com unico retorno arrow function nao precisa de chave nem de chamada de return
        `
            <tr> 
              <td>${DateHelper.dataParaTexto(n.data)}</td>
              <td>${n.quantidade}</td>
              <td>${n.valor}</td>
              <td>${n.volume}</td>
            </tr>
          `
      ).join('')}
      </tbody>
        
      <tfoot>
        <td colspan="3"></td>
        <td>
        ${
          model.negociacoes.reduce((total, n) => {
            //primeiro parametro pode ser qualquer variavel, n -> posicao que esta sendo percorrido
            return total + n.volume
          }, 0.0)
          //segundo parametro , valor inicial de total
        }
      </td>
      </tfoot>

    </table>
  `
  }

  update(model) {
    this._elemento.innerHTML = this._template(model)
  }


}

