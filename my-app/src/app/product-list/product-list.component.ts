import {Component} from '@angular/core';
import { products } from '../products';
import { WishListService } from '../wishlist.service';


@Component ( {
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
    products = products;

    constructor(
        private wishlistService: WishListService
    ) {}
    share() {
        window.alert('The product has been shared');
    }

    onNotify() {
        window.alert('You will be notified when the product goes on sale!');
    }
    addToWishlist(product, id) {
        this.wishlistService.add(product, id);
    }

    check(id) {
        return this.wishlistService.check(id);
    }

    removeFromWishlist(id) {
        return this.wishlistService.remove(id);
    }
}
