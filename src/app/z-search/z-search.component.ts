import { Component, OnInit } from '@angular/core';
import { ZomatoService } from '../zomato.service';
@Component({
  selector: 'z-search',
  templateUrl: './z-search.component.html',
  styleUrls: ['./z-search.component.css']
})
export class ZSearchComponent implements OnInit {
  location = {};
  loc = " ";
  rests:any;
  haslocation:any = false;
  locbyquery:any;
  constructor(private _zomatoService:  ZomatoService ) {
    console.log('z component');
  }
  ngOnInit() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.location = position.coords;

      });
  }
}
  findRestaurants(){
    this._zomatoService.getNearbyRestaurants(this.location.latitude,this.location.longitude).subscribe(rests => {
    this.rests = rests;
    console.log(this.rests);
  });
}
  getL(){
    this._zomatoService.getLocation(this.loc).subscribe(locbyquery => {
    this.locbyquery = locbyquery;
    this._zomatoService.getNearbyRestaurants(this.locbyquery.location_suggestions[0].latitude, this.locbyquery.location_suggestions[0].longitude).subscribe(rests => {
    this.rests = rests;
    console.log(this.rests);
  });
  });


  }




}
