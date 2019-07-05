import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
    providedIn: 'root'
})
export class CartService {
    items = [];

    constructor(
        private http: HttpClient
    ) {}

    addToCart(product) {
        this.items.push(product);
    }

    getItems() {
        return this.items;
    }

    getOneItem(index) {
        return this.items.splice(index, 1 );
    }

    clearCart() {
        this.items = [];

        return this.items;
    }

    getShippingPrices() {
        return this.http.get('/assets/shipping.json');
    }
}
