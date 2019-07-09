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
    this.items = wishListService.getAll();
  }

  ngOnInit() {
  }
  add(product, id) {
    this.wishListService.add(product, id);
  }

  remove(id) {
    this.wishListService.remove(id);
  }
  clearWishlist() {
    this.items = this.wishListService.clearWishlist();
  }

}
