
import { CreateproductPage } from '../createproduct/createproduct';
import { ShopeditPage } from '../shopedit/shopedit';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, Platform, PopoverController } from 'ionic-angular';
import { reorderArray } from 'ionic-angular';
import { DragulaService } from 'ng2-dragula';
import { elementDef } from '@angular/core/src/view/element';
import { CreatecatePage } from '../createcate/createcate';
import { ShopServiceProvider } from './shop-service';
import { ShopModel } from './shop.model';


@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',

})
export class ShopPage {
  private cate: Array<any> = [];
  private product: Array<any> = [];
  private promote: Array<any> = [];
  private sd: Array<any> = [];
  shop: ShopModel = new ShopModel();
  pImages: Array<any> = [];
  index: Number = 0;
  shopContact = {
    name: 'ละมุนภัณฑ์',
    description: 'COFFICE IDEA SPACE',
    address: 'LUMLUKKA 5',
    time: '18.00 - 24.00 น.'
  }
  dataProd: any;

  constructor(private dragulaService: DragulaService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalController: ModalController,
    public popoverCtrl: PopoverController,
    public shopServiceProvider: ShopServiceProvider) {
    dragulaService.setOptions('zone1', {});

  }




  ionViewDidLoad() {
    this.shopTest();
  }
  deleteProduct(id) {
    for (let i = 0; i < this.product.length; i++) {
      if (id == this.product[i].id) {
        this.product[i] = {
          img: 'http://res.cloudinary.com/ha7s6qhcg/image/upload/v1511499758/pp_clfpol.jpg',
          name: ''
        }
      }
    }
  }

  showDelete(id) {
    if (this.sd[id]) {
      this.sd[id] = false;
    } else {
      this.sd[id] = true;
    }
  }
  edit() {

    this.navCtrl.push(ShopeditPage, this.shopContact)
    // this.popoverCtrl.create(ShopeditPage, this.shopContact);
    // let opt ={
    //   cssClass: "popSize"
    // }
    // let popover = this.popoverCtrl.create(ShopeditPage,this.shopContact,opt);
    // popover.present({

    // });
  }
  presentPopover1(myEvent) {
    let popover = this.popoverCtrl.create(CreatecatePage);
    popover.present({
    });
  }
  presentPopover2(myEvent) {
    let popover = this.popoverCtrl.create(CreateproductPage);
    popover.present({
    });
  }
  shopTest() {
    this.shopServiceProvider.getNormalShop().then(data => {
      console.log(data);
      this.shop = data;
    })
  }

  selectShopBG() {
    alert("OK");
  }
  selectedCate(index) {
    this.index = index;
  }

}
