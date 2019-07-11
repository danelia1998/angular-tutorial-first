import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    constructor() {

    }

    items = [];

    addToCart(product) {
        this.items.push(product);
    }
    getItems() {
        return this.items;
    }
    clearCart() {
        this.items = [];
        return this.items;
    }
    removeItem(product) {
        this.items.splice(this.items.indexOf(product), 1);
    }
}
