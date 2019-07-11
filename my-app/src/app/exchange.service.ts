import { Injectable } from '@angular/core';
import { data } from './currencies';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  currencies;
  fromValue;
  toValue;
  rate;

  constructor(private httpClient: HttpClient) {
    this.currencies = data;
   }

   setFromValue(value) {
    this.fromValue = value;
    if (this.toValue) {
      return this.getRate();
    }
   }

   setToValue(value) {
    this.toValue = value;
    if (this.fromValue) {
      return this.getRate();
    }
   }

   getRate() {
    const url = `https://api.exchangeratesapi.io/latest?base=${this.fromValue}&symbols=${this.toValue}`;
    return new Observable(subscriber => {
      this.httpClient.get(url).subscribe(value => {
        this.setRate(value);
        subscriber.next();
      });
    });

   }

   setRate(value) {
    this.rate = value.rates[this.toValue.toString()];
  }
}
