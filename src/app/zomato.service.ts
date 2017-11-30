import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class ZomatoService {
  private key = '3b5425caf2beac966bae1fee8fe780ae';
  location = {};

  constructor(private http: Http) {
  console.log('Zomato Service Init');
 }
  getNearbyRestaurants(lat,lon){
  return this.http.get('https://developers.zomato.com/api/v2.1/geocode?lat=' + lat + '&lon='+ lon +'&apikey='+ this.key).map(res => res.json());
  }
  getLocation(loc){
    return this.http.get('https://developers.zomato.com/api/v2.1/locations?query=' + loc +'&apikey='+ this.key).map(res => res.json());

  }


}
