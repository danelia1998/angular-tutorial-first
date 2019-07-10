import { Component, OnInit } from "@angular/core";
import { products } from '../products';
import { WishListService } from '../wish-list.service';

@Component({
    selector: `app-product-list`,
    templateUrl: `./product-list.component.html`,
    styleUrls: [`./product-list.component.scss`]
})

export class ProductListComponent {
    products = products;

    constructor(private wishListService: WishListService) { }

    share() {
        window.alert(`The prodcut has been shared`);
    }

    onNotify() {
        window.alert(`You will bew notified`);
    }

    addToWishList(product) {
        this.wishListService.addToWishList(product);
    }

    removeFromWishList(product) {
        this.wishListService.removeFromWishList(product);
    }

    wishListHas(product) {
        return this.wishListService.has(product);
    }
}