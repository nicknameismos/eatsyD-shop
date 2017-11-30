import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShopTimeEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop-time-edit',
  templateUrl: 'shop-time-edit.html',
})
export class ShopTimeEditPage {
  private editTime: any;
  private day: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopTimeEditPage');
  }
  close(){
    this.navCtrl.pop();
  }

}
