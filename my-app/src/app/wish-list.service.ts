import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishListService {
  products = [];
  constructor() { }

  getProducts() {
    return this.products;
  }

  addToWishList(product) {
    this.products.push(product);
    window.alert("This item was added to wish list");
  }

  removeFromWishList(product) {
    this.products.splice(this.products.indexOf(product), 1);
  }

  has(product) {
    return this.products.some(item => item === product);
  }

  clearWishList() {
    this.products.splice(0);
  }
}
