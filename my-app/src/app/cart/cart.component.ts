import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from "@angular/forms";
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items;
  checkedForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.items = this.cartService.getItems();
    this.checkedForm = formBuilder.group({
      name: ['', [Validators.minLength(4), this.forbiddenName()]],
      address: formBuilder.group({
        street: '',
        city: '',
        state: '',
        zip: ''
      }, {
          validators: this.crossValidation
        })
    });
  }

  ngOnInit() {
  }

  removeFromCart(product) {
    this.cartService.removeFromCart(product);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  onSubmit(value) {
    console.log(value);

    this.checkedForm.reset();
  }

  resetForm() {
    this.checkedForm.patchValue({
      name: 'Erekle'
    });
  }

  crossValidation(formGroup) {
    const zip = formGroup.get('zip').value;
    const zipStatus = CartComponent.isZipOk(zip);

    const city = formGroup.get('city').value;
    const cityStatus = CartComponent.isCityOk(city);

    return zipStatus && cityStatus ? null : {
      zipStatus,
      cityStatus
    }
  }

  private static isZipOk(zip) {
    return zip.length < 3;
  }

  private static isCityOk(city: string) {
    return city.charAt(0).toLocaleLowerCase() !== 'a';
  }

  forbiddenName() {
    return (formControl) => {
      return formControl.value === 'Roman' ? { forbidden: { invalid: true } } : null;
    }
  }

  get name() {
    return this.checkedForm.get('name') as FormControl;
  }

  get address() {
    return this.checkedForm.get('address') as FormGroup;
  }

}
