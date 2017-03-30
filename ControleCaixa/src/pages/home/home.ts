import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

public nome: string;

  constructor(public navCtrl: NavController) {
    this.nome = "Pedro";
  }

  getNome() {
    return "Retornado pelo método: " + this.nome;
  }

}
