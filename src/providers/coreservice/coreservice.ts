import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the CoreserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CoreserviceProvider {

  constructor(public http: Http) {
    console.log('Hello CoreserviceProvider Provider');
  }

  authorizationHeader() {
    let headers = new Headers();
    let token = JSON.parse(window.localStorage.getItem('token')).loginToken;
    headers.append('Authorization', 'Bearer ' + token);
    return headers;
  }

}
