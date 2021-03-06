import { PromoteimgPage } from '../pages/promoteimg/promoteimg';
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
import { ShopTimeEditPage } from '../pages/shop-time-edit/shop-time-edit';
import { CreatecatePage } from '../pages/createcate/createcate';
import { CoreserviceProvider } from '../providers/coreservice/coreservice';
import { ImagePicker } from '@ionic-native/image-picker';
import { UndefinedProvider } from '../providers/undefined/undefined';
import { ShopServiceProvider } from '../pages/shop/shop-service';
import { IonUploadImagesComponent } from "../components/ion-upload-image/ion-upload-image";
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
    ShopTimeEditPage,
    CreatecatePage,
    CreateproductPage,
    PromoteimgPage,
    IonUploadImagesComponent

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
    ShopTimeEditPage,
    CreatecatePage,
    CreateproductPage,
    PromoteimgPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Auth,
    Keyboard,
    Server,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ShopServiceProvider,
    CoreserviceProvider,
    ImagePicker,

    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UndefinedProvider,
  ]
})
export class AppModule { }
