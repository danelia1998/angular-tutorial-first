import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {
private type = 'None';

 constructor(
   private http: HttpClient
 ) { }

 getShippingPrices() {
   return this.http.get('/assets/shipping.json');
 }

 getType(){
   return this.type;
 }

 selectType(type) {
   this.type = type;
 }
}
