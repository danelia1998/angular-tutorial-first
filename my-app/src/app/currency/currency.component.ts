import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  rates: Array<object> = [];
  length: number;

  constructor(
    private currencyService: CurrencyService
  ) { }

  ngOnInit() {
    const action = (value) => {
      this.rates.push(value);
    };
    const complete = (length) => {
      this.length = length;
    };

    const filterCallback = ({ value }) => value > 2;

    const mapCallback = ({currency, value}) => ({icon : '🏦', currency, value});

    const Observer = this.currencyService.Observer;

    const observable = Observer
    .pipe(filter(filterCallback), map(mapCallback))
    .subscribe(action, complete);
  }
}
