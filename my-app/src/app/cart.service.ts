import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable ({
    providedIn: 'root'
})
export class CartService {
    items =[];
    constructor(
        private http: HttpClient
    ) {}
    addToCart(product) {
        this.items.push(product);
    }

    getitems() {
        return this.items;
    }

    getShippingPrices() {
        return this.http.get('/assets/shipping.json');
    }

    clearCart() {
        this.items = [];
        return this.items;
    }
    remove(id) {
        this.items.splice(id, 1);
        return this.items;
    }
    check(product) {
        return this.items.includes(product);
    }
}
