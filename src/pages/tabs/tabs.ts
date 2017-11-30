import { Tabs } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ShopPage } from '../shop/shop';

@Component({
  selector: 'page-tab',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('myTabs') tabRef: Tabs;

  tab1Root = ShopPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = ContactPage;
  tab5Root = ContactPage;

  constructor() {

  }
  ordertab() {
    // this.navCtrl.push(AddAddressPage);
    // this.navCtrl.setRoot(AddAddressPage);
    // this.app.getRootNav().push(AddAddressPage);
    this.tabRef.select(2);
  }
  getSelectedTab() {
    return 1;
  }
}
