import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Auth } from '../../provider/auth.service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private credentials: any = {};

  constructor(private auth: Auth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  login() {
    this.auth.login(this.credentials).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    })
  }

}
