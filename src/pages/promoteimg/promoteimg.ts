import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, PopoverController } from 'ionic-angular';

/**
 * Generated class for the PromoteimgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-promoteimg',
  templateUrl: 'promoteimg.html',
})
export class PromoteimgPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl : ModalController, public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PromoteimgPage');
  }

}
