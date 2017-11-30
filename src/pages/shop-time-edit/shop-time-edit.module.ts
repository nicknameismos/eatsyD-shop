import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopTimeEditPage } from './shop-time-edit';

@NgModule({
  declarations: [
    ShopTimeEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopTimeEditPage),
  ],
})
export class ShopTimeEditPageModule {}
