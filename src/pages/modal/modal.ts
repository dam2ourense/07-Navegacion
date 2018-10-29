import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController) {
    this.nombre_mio=this.navParams.get("nombre");
    this.edad_mia= this.navParams.get("edad");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  cerrar_sin_parametros(){
    this.viewCtrl.dismiss();
  }

  cerrar_con_parametros(){
    let dato = {
      nombre:"Lara",
      edad: 4,
      ubucicion:{
        longitud: 10,
        latitud: 43.444
      }
    }
    this.viewCtrl.dismiss(dato);
  }

}
