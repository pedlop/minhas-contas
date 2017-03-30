import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-teste',
  templateUrl: 'teste.html'
})
export class TestePage {

  public nome: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nome = "Pedro";
  }

  getNome() {
    return "Retornado pelo método: " + this.nome;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestePage');
  }

}
