import { Component, OnInit } from '@angular/core';

import { CartService } from './../cart.service';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

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

    private static isZipOk(zip) {
        return zip.length < 3;
    }

    private static isCityOk(city) {
        return city.charAt(0).toLowerCase() !== 'a';
    }

    ngOnInit() {

    }

    crossValidation(formGroup) {
        const zip = formGroup.get('zip').value;
        const zipStatus = CartComponent.isZipOk(zip);
        const city = formGroup.get('city').value;
        const cityStatus = CartComponent.isCityOk(city);

        return  zipStatus && cityStatus ? null : {
            zipStatus,
            cityStatus
        };
    }

    forbiddenName() {
        return (formControl) => {
            return formControl.value === 'Roman' ? {forbidden: {invalid: true}} : null;
        };
    }
    removeItem(product) {
        this.cartService.removeItem(product);
    }
    removeAll() {
        this.items = this.cartService.clearCart();
    }
    onSubmit(value) {
        console.log(value);

        this.checkedForm.reset();
    }
    resetForm() {
        this.checkedForm.patchValue({
            name: 'Luka'
        });
    }

    get name() {
        return this.checkedForm.get('name') as FormControl;
    }

    get address() {
        return this.checkedForm.get('address') as FormGroup;
    }
}
