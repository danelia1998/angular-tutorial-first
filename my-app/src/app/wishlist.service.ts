import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class WishListService {
    wishList = [];
    constructor() {}

    getAll() {
        return this.wishList;
    }

    add(product, id) {
        console.log(id);
        if (!this.check(id)) {
            this.wishList.push({...product, id});
        }
    }
    remove(id) {
        this.wishList.splice(this.wishList.findIndex((item) => item.id === id), 1);
    }

    check(id) {
        return this.wishList.some((item) => item.id === id);
    }

    clearWishlist() {
        this.wishList = [];
        return this.wishList;
    }
}
