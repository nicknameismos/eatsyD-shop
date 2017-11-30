import { CreateproductPage } from '../pages/createproduct/createproduct';
import { RegisterPage } from './../pages/register/register';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Keyboard } from "@ionic-native/keyboard";

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DragulaModule } from 'ng2-dragula';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GreetingPage } from '../pages/greeting/greeting';
import { LoginPage } from '../pages/login/login';
import { Server } from '../provider/server.config';
import { Auth } from '../provider/auth.service';
import { HttpModule } from '@angular/http';
import { ShopPage } from '../pages/shop/shop';
import { ShopeditPage } from '../pages/shopedit/shopedit';
import { CreatecatePage } from '../pages/createcate/createcate';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GreetingPage,
    LoginPage,
    ShopPage,
    RegisterPage,
    ShopeditPage,
    CreatecatePage,
    CreateproductPage
    
  ],
  imports: [
    BrowserModule,
    DragulaModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      mode: 'ios',
      scrollAssist: false,
      autoFocusAssist: false,
      scrollPadding: false,
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GreetingPage,
    LoginPage,
    ShopPage,
    RegisterPage,
    ShopeditPage,
    CreatecatePage,
    CreateproductPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Auth,
    Keyboard,
    Server,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
