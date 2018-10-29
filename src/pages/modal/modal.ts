import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  nombre_mio: string="";
  edad_mia:number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nombre_mio=this.navParams.get("nombre");
    this.edad_mia= this.navParams.get("edad");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

}
