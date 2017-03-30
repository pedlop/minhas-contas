import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DAOContas } from '../../dao/dao-contas';

@Component({
  selector: 'page-contas',
  templateUrl: 'contas.html'
})
export class ContasPage {

  dao;
  listContas;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dao = new DAOContas;
    this.listContas = this.dao.getList();
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ContasPage');
  }

}
