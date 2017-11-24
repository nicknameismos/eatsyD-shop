import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {
  private cate: Array<any> = [];
  private product: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.cate = [
      'http://blankrangemusic.com/images/camera.svg',
      'http://blankrangemusic.com/images/camera.svg',
      'http://blankrangemusic.com/images/camera.svg',
      'http://blankrangemusic.com/images/camera.svg',
      'http://blankrangemusic.com/images/camera.svg',
      'http://blankrangemusic.com/images/camera.svg',
    ];
    this.product = [
      'http://blankrangemusic.com/images/camera.svg',
      'http://blankrangemusic.com/images/camera.svg',
      'http://blankrangemusic.com/images/camera.svg',
    ];
  }
  

}
