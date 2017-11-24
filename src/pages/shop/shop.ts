import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {
  private imgs: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.imgs = [
      'https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?auto=format&fit=crop&w=668&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
      'https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?auto=format&fit=crop&w=668&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
      'https://images.unsplash.com/photo-1453831362806-3d5577f014a4?auto=format&fit=crop&w=738&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
      'https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?auto=format&fit=crop&w=668&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
      'https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?auto=format&fit=crop&w=668&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
      'https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?auto=format&fit=crop&w=668&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
      'https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?auto=format&fit=crop&w=668&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
    ];

  }

}
