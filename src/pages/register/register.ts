import { TabsPage } from './../tabs/tabs';
import { RegisterModel } from './register.model';
import { Auth } from './../../provider/auth.service';
import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
// import { FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  registerData: RegisterModel = new RegisterModel();
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    // public form: FormBuilder,
    private auth: Auth,
    public alertCtrl: AlertController
  ) {
    // let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    // this.registerForm = form.group({
    //   firstName: ['', Validators.compose([Validators.minLength(2), Validators.required])],
    //   lastName: ['', Validators.compose([Validators.minLength(2), Validators.required])],
    //   email: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])],
    //   mobile: ['', Validators.compose([Validators.minLength(6), Validators.required])],
    //   password: ['', Validators.compose([Validators.minLength(8), Validators.required])],
    //   dateOfBirth: [''],
    //   gender: [''],
    //   username: ['']

    //   // dateOfBirth
    // });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register() {

    let mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,10})");

    if (!this.registerData.username) {
      this.registerData.username = this.registerData.email;
    }

    if (mediumRegex.test(this.registerData.password)) {
      console.log(this.registerData.password);
      this.auth.signUp(this.registerData).subscribe((resp) => {
        console.log(resp);
        this.navCtrl.setRoot(TabsPage);
      }, (err) => {
        console.log(err);
      });
    } else {
      // alert('ต้องมีตังอักษรและตัวเลขอย่างน้อย 6-10 ตัว');
      this.showAlert();
    }

  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Password!',
      subTitle: 'ต้องมีตัวอักษรและตัวเลขอย่างน้อย 6-10 ตัว!',
      buttons: ['OK']
    });
    alert.present();
  }
}
