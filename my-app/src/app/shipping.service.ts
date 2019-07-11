import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  private type = 'none';

  constructor(private http: HttpClient) { }

  getShippingCosts() {
    return this.http.get('/assets/shipping.json');
  }

  setShipping(value) {
    this.type = value;
  }

  getType() {
    return this.type;
  }
}
