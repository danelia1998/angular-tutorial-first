import { Component, OnInit } from '@angular/core';
import { WishListService } from '../wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
    items;

    constructor(
        private wishListService: WishListService
    ) {
        this.items = this.wishListService.getItems();
    }

    ngOnInit() {

    }
    removeItem(product) {
        this.wishListService.removeItem(product);
    }
    removeAll() {
        this.items = this.wishListService.clearList();
    }

}
