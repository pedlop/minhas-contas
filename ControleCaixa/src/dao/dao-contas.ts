export class DAOContas {
list;

  constructor() {
    this.list = [];
  }

  getList() {
    this.list = [
      {descricao: "Alimentação"},
      {descricao: "Lazer"},
      {descricao: "Transporte"}
    ];

    return this.list;
  }

  insert(conta) {

  }

  edit(conta) {

  }

  delete(conta) {

  }
}
