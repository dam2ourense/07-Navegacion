import { NavParams, NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html'
})
export class Pagina3Page {
    pais: any = {};
  constructor(private navParams:NavParams,
              private navCtrl:NavController) {
      console.log(this.navParams);
      this.pais = this.navParams.get("pais");
  }

  IrAtras(){
    this.navCtrl.pop();
  }
  IrRoot(){
    this.navCtrl.popToRoot();
  }
}
