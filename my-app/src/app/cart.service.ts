import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items = [];

  constructor(private http: HttpClient) {
  }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  removeFromCart(product) {
    this.items.splice(this.items.indexOf(product), 1);
  }

  clearCart() {
    this.items.splice(0);
  }

  getShippingCosts() {
    return this.http.get('/assets/shipping.json');
  }
}
