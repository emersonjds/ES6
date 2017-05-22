import {NegociacaoController} from './controllers/NegociacaoController'
import {} from './polyfill/fetchAPI'

let negociacaoController = currentInstance()

document.querySelector('.form').onsubmit = negociacaoController.adiciona().bind(NegociacaoController)
document.querySelector('[type=button]').onclick = negociacaoController.apaga().bind(negociacaoController)
