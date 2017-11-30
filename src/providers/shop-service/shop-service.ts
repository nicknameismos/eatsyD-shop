import { Server } from './../../provider/server.config';
import { CoreserviceProvider } from './../coreservice/coreservice';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
/*
  Generated class for the ShopServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShopServiceProvider {

  constructor(public http: Http, public coreService: CoreserviceProvider, public server: Server) {
    console.log('Hello ShopServiceProvider Provider');
  }

  updateShopByID(data): Promise<any> {
    let headers = this.coreService.authorizationHeader();
    return this.http.put(this.server + 'shops/' + data._id, data, { headers: headers })
      .toPromise()
      .then(response => response.json() as any)
      .catch(this.handleError);
  }

  getProductListByShop(shopId): Promise<any> {
    let headers = this.coreService.authorizationHeader();
    return this.http.get(this.server + 'productsbyshop/' + shopId, { headers: headers })
      .toPromise()
      .then(response => response.json() as any)
      .catch(this.handleError);
  }

  createProduct(product): Promise<any> {
    let headers = this.coreService.authorizationHeader();
    return this.http.post(this.server + 'products/', product, { headers: headers })
      .toPromise()
      .then(response => response.json() as any)
      .catch(this.handleError);
  }

  updateProduct(product): Promise<any> {
    let headers = this.coreService.authorizationHeader();
    return this.http.put(this.server + 'products/' + product._id, product, { headers: headers })
      .toPromise()
      .then(response => response.json() as any)
      .catch(this.handleError);
  }

  deleteProduct(id): Promise<any> {
    let headers = this.coreService.authorizationHeader();
    return this.http.delete(this.server + 'products/' + id, { headers: headers })
      .toPromise()
      .then(response => response.json() as any)
      .catch(this.handleError);
  }

  getCategoryProductByShop(shopId): Promise<any> {
    let headers = this.coreService.authorizationHeader();
    return this.http.get(this.server + 'categoryproductsbyshop/' + shopId, { headers: headers })
      .toPromise()
      .then(response => response.json() as any)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
