import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { elementDef } from '@angular/core/src/view/element';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-greeting',
  templateUrl: 'greeting.html',
})
export class GreetingPage {
  private greeting: Array<any> = [];

  constructor(private app: App, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.greeting = [
      'http://res.cloudinary.com/ha7s6qhcg/image/upload/v1510545125/1.1_obr1ax.jpg',
      'http://res.cloudinary.com/ha7s6qhcg/image/upload/v1509433080/3_h1tvqz.jpg',
      'http://res.cloudinary.com/ha7s6qhcg/image/upload/v1509433080/2_aza1gl.jpg'
    ];
  }

  gotoLoginPage() {
    if (window.localStorage.getItem('token')) {
      this.navCtrl.setRoot(TabsPage);
    } else {
      this.app.getRootNav().push(LoginPage);      
    }
  }

}
