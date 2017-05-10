class NegociacoesView extends View {

  constructor(elemento) {
    super(elemento)
  }

  template(model) {
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

  _reduce() {
    let numeros = [1, 2, 3, 4]
    let resultado = numeros.reduce((total, item) => total * item, 1)
  }

  _templateExamplo() {
    return `
    ${
      (function () {
        let funcionarios = [
          {
            "nome": "Douglas",
            "endereco": "Rua x",
            "salario": "2000"
          },
          {
            "nome": "Maria",
            "endereco": "Rua y",
            "salario": "4000"
          },
          {
            "nome": "Joao",
            "endereco": "Rua z",
            "salario": "7000"
          },
        ]


        let funcionariosEmHtml = funcionarios.map((funcionario) => {
          return `       
                <td>${funcionario.nome}</td>
                <td>${funcionario.endereco}</td>
                <td>${funcionario.salario}</td>
              `
        }).join('')
      })()
      } ` 
    }

    _map() {
      let numeros = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121]

      let dobro = numeros.map(function (num) {
        return num * 2;
      });
      let metade = numeros.map(function (num) {
        return num / 2;
      });
      let raiz = numeros.map(function (num) {
        return Math.sqrt(num);
      });
    }

  }

