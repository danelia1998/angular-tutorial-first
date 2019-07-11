import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ExchangeService } from '../exchange.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {
  exchangeForm;
  currencies;
  fromValue = 'From';
  toValue = 'To';

  constructor(
    private fb: FormBuilder,
    private exchangeService: ExchangeService,
    ) {
    this.exchangeForm = this.fb.group({
      currencyFrom: ['USD'],
      input: [1,  Validators.min(0)],
      currencyTo: ['USD'],
      output: [1, Validators.min(0)]
    });
    this.currencies = this.exchangeService.currencies;
    const from$ = this.setFromValue(this.exchangeForm.controls.currencyFrom.value);
    if (from$) {
      from$.subscribe(() => {});
    }
    const to$ = this.setToValue(this.exchangeForm.controls.currencyTo.value);
    if (to$) {
      to$.subscribe(() => {});
    }
   }

  ngOnInit() {
  }

  setFromValue(value) {
    this.fromValue = value;
    return this.exchangeService.setFromValue(value);
  }

  setToValue(value) {
    this.toValue = value;
    return this.exchangeService.setToValue(value);
  }

  changeToCurrency(value) {
    const rate$ = this.setToValue(value);
    if (rate$) {
      rate$.subscribe(() => {
        this.changeToValue(this.output.value);
      });
    }
  }

  changeToValue(value) {
    this.input.setValue(value / this.exchangeService.rate);
  }

  changeFromCurrency(value) {
    const rate$ = this.setFromValue(value);
    if (rate$) {
      rate$.subscribe(() => {
        this.changeFromValue(this.input.value);
      });
    }
  }

  changeFromValue(value) {
    this.output.setValue(value * this.exchangeService.rate);
  }

  get input() {
    return this.exchangeForm.get('input') as FormControl;
  }

  get output() {
    return this.exchangeForm.get('output') as FormControl;
  }
}
