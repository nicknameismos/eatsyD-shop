import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ShopPage } from '../shop/shop';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  
  tab1Root = ShopPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = ContactPage;
  tab5Root = ContactPage;

  constructor() {

  }
}
