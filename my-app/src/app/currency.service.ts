import { Injectable, Component } from '@angular/core';
import {data} from './currencies';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
 providedIn: 'root'
})
export class CurrencyService {
 currencies;
 Observer;


 constructor( private httpClient: HttpClient) {
   this.currencies = data;

   this.Observer = new Observable(this.subscribe());
 }

 subscribe() {
   return (subscriber) => {
     let i = 0 ;
     const size = this.currencies.length;
     from(this.currencies).subscribe((currency) => {
       const url = `https://api.exchangeratesapi.io/latest?symbols=${currency}`;

       this.httpClient.get(url).subscribe((value) => {
          i++;
          subscriber.next(value);

          if (i === size) {
            subscriber.complite();
          }
       });
     });
   };
 }
}