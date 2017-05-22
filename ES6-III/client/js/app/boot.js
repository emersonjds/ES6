'use strict';

System.register(['./controllers/NegociacaoController', './polyfill/fetchAPI'], function (_export, _context) {
  "use strict";

  var NegociacaoController, negociacaoController;
  return {
    setters: [function (_controllersNegociacaoController) {
      NegociacaoController = _controllersNegociacaoController.NegociacaoController;
    }, function (_polyfillFetchAPI) {}],
    execute: function () {
      negociacaoController = currentInstance();


      document.querySelector('.form').onsubmit = negociacaoController.adiciona().bind(NegociacaoController);
      document.querySelector('[type=button]').onclick = negociacaoController.apaga().bind(negociacaoController);
    }
  };
});
//# sourceMappingURL=boot.js.map