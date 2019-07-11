import { Component, OnInit } from '@angular/core';
import { ShippingService } from '../shipping.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  shippingCosts;
  selectedShipping;

  constructor(private shippingService: ShippingService) {
    this.shippingCosts = this.shippingService.getShippingCosts();
    this.selectedShipping = this.shippingService.getType();
   }

  ngOnInit() {
  }

  selectShipping(value) {
    this.shippingService.setShipping(value);
  }

}
