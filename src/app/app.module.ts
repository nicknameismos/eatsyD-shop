import { RegisterPage } from './../pages/register/register';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GreetingPage } from '../pages/greeting/greeting';
import { LoginPage } from '../pages/login/login';
import { Server } from '../provider/server.config';
import { Auth } from '../provider/auth.service';
import { HttpModule } from '@angular/http';
import { ShopPage } from '../pages/shop/shop';

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
    RegisterPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, { mode: 'ios' })
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
    RegisterPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Auth,
    Server,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
