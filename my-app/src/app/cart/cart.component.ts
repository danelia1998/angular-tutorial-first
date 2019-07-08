import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.items = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: this.formBuilder.group({
        street: '',
        city: '',
        state: '',
        zip: ''
      })
    });
  }

  onSubmit(customerData) {
    console.warn('Your order has been submitted', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  clearAllCart() {
    this.items = this.cartService.clearCart();
  }

  clearOne(item) {
    this.cartService.getOneItem(item);
  }

  setDefault() {
    this.checkoutForm.patchValue({
      name: 'John Doe'
    });
  }





  ngOnInit() {
  }

}
