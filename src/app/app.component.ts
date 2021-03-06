import { ShopPage } from '../pages/shop/shop';
import { LoginPage } from './../pages/login/login';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { GreetingPage } from '../pages/greeting/greeting';
import { RegisterPage } from '../pages/register/register';
import { Keyboard } from '@ionic-native/keyboard';
import * as firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = ShopPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, keybord: Keyboard) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      keybord.disableScroll(true);
    });

  }
  configFirebase() {
    let config = {
      apiKey: "AIzaSyAIjuU99uz_H4Er6J6Xsja48SMpLmuoZ5o",
      authDomain: "schoolbus-cnet.firebaseapp.com",
      databaseURL: "https://schoolbus-cnet.firebaseio.com/",
      projectId: "schoolbus-cnet",
      storageBucket: "schoolbus-cnet.appspot.com",
      messagingSenderId: "356749167374"
    };
    firebase.initializeApp(config);
  }
}
