import { Component } from '@angular/core';

import { products } from '../products';
import { WishListService } from '../wishlist.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
    products = products;

    constructor(private wishListService: WishListService) {

    }

    share() {
        window.alert('The product has been shared');
    }

    onNotify() {
        window.alert('You will be notified!');
    }
    addToList(product) {
        this.wishListService.addToList(product);
    }
    doesInclude(product) {
        return this.wishListService.doesInclude(product);
    }
    removeItem(product) {
        this.wishListService.removeItem(product);
    }
}
