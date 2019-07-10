import { Injectable } from '@angular/core';
import { data } from './currencies'
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {
  currencies;
  Observer;

  constructor(private http: HttpClient) {
    this.currencies = data;

    // this.Observer = new Observable();
  }

  getCurrencies() {
    return this.currencies;
  }
  getRates(base, symbol) {
    const url = `https://api.exchangeratesapi.io/latest?base=${base}&symbols=${symbol}`;
    return this.http.get(url);
 }
}
