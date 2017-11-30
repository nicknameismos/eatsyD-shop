import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CreateproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-createproduct',
  templateUrl: 'createproduct.html',
})
export class CreateproductPage {
  private createprod : Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

    this.createprod = [{
      img : 'https://image.flaticon.com/icons/png/512/635/635902.png'
    },
    {
      img : 'https://image.flaticon.com/icons/png/512/635/635902.png'
    },
    {
      img : 'https://image.flaticon.com/icons/png/512/635/635902.png'
    }
  ]
    console.log('ionViewDidLoad CreateproductPage');
  }
  save() {
    this.navCtrl.pop();
  }

}