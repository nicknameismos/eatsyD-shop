import { CreateproductPage } from '../createproduct/createproduct';
import { ShopeditPage } from '../shopedit/shopedit';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, Platform, PopoverController } from 'ionic-angular';
import { reorderArray } from 'ionic-angular';
import { DragulaService } from 'ng2-dragula';
import { elementDef } from '@angular/core/src/view/element';
import { CreatecatePage } from '../createcate/createcate';
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

  shopContact = {
    name: 'ละมุนภัณฑ์',
    description: 'COFFICE IDEA SPACE',
    address: 'LUMLUKKA 5',
    time: '18.00 - 24.00 น.'

  }

  constructor(private dragulaService: DragulaService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalController: ModalController,
    public popoverCtrl: PopoverController) {
    dragulaService.setOptions('zone1', {});
  }
  



  ionViewDidLoad() {
    this.promote = [{
      img: 'http://res.cloudinary.com/ha7s6qhcg/image/upload/v1511519960/camera_bkdxf8.png'
    },
    {
      img: 'http://www.thetimesinplainenglish.com/wp-content/uploads/2017/04/juicing-health-fresh-juice-good.jpg'
    },
    {
      img: 'https://realfood.tesco.com/media/images/steak-polenta1995-LH-21bde053-a232-4c4d-ac9f-b0fd69aa3232-0-1400x919.jpg'
    },
    {
      img: 'https://www.noobeebee.com/wp-content/uploads/2017/09/rhrh.png'
    },
    {
      img: 'https://www.ifit4health.com/wp-content/uploads/2015/07/%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%9E%E0%B8%A3%E0%B8%B2-plamplaza.jpg'
    },
    ];

    this.cate = [{
      img: 'https://livelovefruit.com/wp-content/uploads/2015/06/Benefits-of-eating-fruit-forbreakfast.jpg',
      name: 'ผลไม้'
    },
    {
      img: 'https://dqk1dnz21ztlg.cloudfront.net/wp-content/uploads/2017/05/17121631/shutterstock_585496844.jpg',
      name: 'ตามสั่ง'
    },
    {
      img: 'http://img.taste.com.au/BcemwIdD/taste/2016/11/chocolate-celebration-cake-85607-1.jpeg',
      name: 'เค้ก'
    },
    {
      img: 'http://www.seriouseats.com/recipes/assets_c/2017/06/20170526-no-bake-cheesecake-vicky-wasik-18-thumb-1500xauto-438251.jpg',
      name: 'ของหวาน'
    }
    ];

    this.product = [{
      id: 1,
      img: 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/9/9/1/KC0703_Aglio-e-Olio_s4x3.jpg.rend.hgtvcom.616.462.suffix/1441900756487.jpeg',
      name: 'สปาเกตตี้',
      price: 100
    },
    {
      id: 2,
      img: 'http://cdn.cnn.com/cnnnext/dam/assets/151215115345-40-thai-food-4-penang-curry-1-full-169.jpg',
      name: 'แกงกะทิหมู',
      price: 100
    },
    {
      id: 3,
      img: 'https://www.eatingthaifood.com/wp-content/uploads/2015/06/goong-pao-1.jpg',
      name: 'กุ้งแม่น้ำเผา',
      price: 100
    },
    {
      id: 4,
      img: 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/10/30/0/FN_thai-restaurant-Som-tum-Der-larb-moo_s4x3.jpg.rend.hgtvcom.966.725.suffix/1477872052701.jpeg',
      name: 'ลาบหมู',
      price: 100
    },
    {
      img: 'http://res.cloudinary.com/ha7s6qhcg/image/upload/v1511499758/pp_clfpol.jpg',
      name: ''
    },
    {
      img: 'http://res.cloudinary.com/ha7s6qhcg/image/upload/v1511499758/pp_clfpol.jpg',
      name: ''
    },
    {
      img: 'http://res.cloudinary.com/ha7s6qhcg/image/upload/v1511499758/pp_clfpol.jpg',
      name: ''
    },
    {
      img: 'http://res.cloudinary.com/ha7s6qhcg/image/upload/v1511499758/pp_clfpol.jpg',
      name: ''
    },
    {
      img: 'http://res.cloudinary.com/ha7s6qhcg/image/upload/v1511499758/pp_clfpol.jpg',
      name: ''
    },
    {
      img: 'http://res.cloudinary.com/ha7s6qhcg/image/upload/v1511499758/pp_clfpol.jpg',
      name: ''
    },
    {
      img: 'http://res.cloudinary.com/ha7s6qhcg/image/upload/v1511499758/pp_clfpol.jpg',
      name: ''
    },
    {
      img: 'http://res.cloudinary.com/ha7s6qhcg/image/upload/v1511499758/pp_clfpol.jpg',
      name: ''
    },
    ];
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
  
}
