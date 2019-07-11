import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class WishListService {
    constructor() {

    }

    items = [];

    doesInclude(product) {
        return this.items.includes(product);
    }
    addToList(product) {
        if (!this.doesInclude(product)) {
            window.alert('Item added to wishlist!');
            this.items.push(product);
        }
    }
    getItems() {
        return this.items;
    }
    clearList() {
        this.items = [];
        return this.items;
    }
    removeItem(product) {
        this.items.splice(this.items.indexOf(product), 1);
    }
}
