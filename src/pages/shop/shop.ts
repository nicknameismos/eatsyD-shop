import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { reorderArray } from 'ionic-angular';
import { DragulaService } from 'ng2-dragula';
@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {
  private cate: Array<any> = [];
  private product: Array<any> = [];
  private promote: Array<any> = [];


  constructor(private dragulaService: DragulaService, public navCtrl: NavController, public navParams: NavParams) {
    dragulaService.setOptions('zone1', {});
    for (let x = 0; x < 5; x++) {
      this.product.push(x);
    }
  }

  ionViewDidLoad() {
    this.promote = [{
      img: 'http://blankrangemusic.com/images/camera.svg'
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
    },
    {
      img: 'http://res.cloudinary.com/ha7s6qhcg/image/upload/v1511499758/pp_clfpol.jpg',
      name: ''
    },
    ];

    this.product = [{
      img: 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/9/9/1/KC0703_Aglio-e-Olio_s4x3.jpg.rend.hgtvcom.616.462.suffix/1441900756487.jpeg',
      name: 'สปาเกตตี้'
    },
    {
      img: 'http://cdn.cnn.com/cnnnext/dam/assets/151215115345-40-thai-food-4-penang-curry-1-full-169.jpg',
      name: 'แกงกะทิหมู'
    },
    {
      img: 'https://www.eatingthaifood.com/wp-content/uploads/2015/06/goong-pao-1.jpg',
      name: 'กุ้งแม่น้ำเผา'
    },
    {
      img: 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/10/30/0/FN_thai-restaurant-Som-tum-Der-larb-moo_s4x3.jpg.rend.hgtvcom.966.725.suffix/1477872052701.jpeg',
      name: 'ลาบหมู'
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

  reorderItems(indexes) {
    let element = this.product[indexes.from];
    this.product.splice(indexes.from, 1);
    this.product.splice(indexes.to, 0, element);
  }
}
