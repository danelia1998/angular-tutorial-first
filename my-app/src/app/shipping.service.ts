import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ShippingService {

 constructor(
   private http: HttpClient
 ) { }

 getShippingPrices() {
   return this.http.get('/assets/shipping.json');
 }
}
