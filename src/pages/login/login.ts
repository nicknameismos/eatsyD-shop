import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Auth } from '../../provider/auth.service';
import { TabsPage } from '../tabs/tabs';

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
      this.navCtrl.setRoot(TabsPage);
    }, error => {
      console.log(error);
    })
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

}
