import { Component, OnInit } from '@angular/core';
import {
   FormBuilder,
    Validators,
    FormControl,
    FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';
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
    this.items = this.cartService.getitems();
    this.checkoutForm = this.formBuilder.group({
      name: ['', [this.forbiddenName(), Validators.minLength(4)] ],
      address: this.formBuilder.group({
        street: '',
        city: '',
        state: '',
        zip: ''
      }, {
        validators: this.crossValidation
      })
    });
  }

  static isZipValid(zip) {
    return zip.length < 3;
  }

  static isCityValid(city) {
    return city && city[0].toLowerCase() === 'a';
  }

  crossValidation(formGroup) {
    const zip = formGroup.get('zip').value;
    const zipStatus = CartComponent.isZipValid(zip);

    const city = formGroup.get('city').value;
    const cityStatus = CartComponent.isCityValid(city);

    const validationResult = {
      zipStatus,
      cityStatus
    };

    return validationResult.zipStatus && validationResult.cityStatus ? null : validationResult;
  }

  forbiddenName() {
    return (formControl) => {
      return formControl.value === 'Oliver' ? {forbiddenName: {invalid: true}} : null;
    };
  }

  onSubmit(customeerdata) {
    console.warn('Your order has been submitted', customeerdata);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  setDefault() {
    this.checkoutForm.patchValue({
      name: 'John Doe'
    });
  }

  ngOnInit() {
  }

  remove(id) {
    this.items = this.cartService.remove(id);
  }

  clearCart() {
    this.items = this.cartService.clearCart();
  }

  get name() {
    return this.checkoutForm.get('name') as FormControl;
  }

  get address() {
    return this.checkoutForm.get('address') as FormGroup;
  }

  get zip() {
    return this.checkoutForm.get('address').get('zip') as FormControl;
  }

  get city() {
    return this.checkoutForm.get('address').get('city') as FormControl;
  }
  get state() {
    return this.checkoutForm.get('address').get('state') as FormControl;
  }

}
