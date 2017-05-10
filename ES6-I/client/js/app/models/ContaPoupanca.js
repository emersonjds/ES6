class ComtaPoupanca extends Conta {

  atualiza(taxa) {
    this._saldo = this._saldo + taxa * 2
  }

}