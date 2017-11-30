
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ShopeditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shopedit',
  templateUrl: 'shopedit.html',
})
export class ShopeditPage {
  editData;

  constructor(public navCtrl: NavController, public navParams: NavParams, viewCtrl: ViewController) {
    this.editData = this.navParams.data;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopeditPage');
  }
  save() {
    this.navCtrl.pop();
  }
  close() {
    this.navCtrl.pop();
  }

  

}
