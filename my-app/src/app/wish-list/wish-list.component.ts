import { Component, OnInit } from '@angular/core';
import { WishListService } from '../wish-list.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  products;
  constructor(private wishListService: WishListService) {
    this.products = wishListService.getProducts();
   }

  ngOnInit() {
  }

  removeFromWishList(product) {
    this.wishListService.removeFromWishList(product);
  }

  clearWishList() {
    this.wishListService.clearWishList();
  }

}
