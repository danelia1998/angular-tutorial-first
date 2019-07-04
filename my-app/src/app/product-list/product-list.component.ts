import { Component } from '@angular/core';
import { products } from '../products';


@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
    products = products;

    share() {
        window.alert('The product heas been shared ');
    }

    onNotify(){
        window.alert('You will be notified whe the product goes on sale')
    }
}
