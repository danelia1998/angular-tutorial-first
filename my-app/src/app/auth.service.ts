import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  access = false;

  constructor() { }

  disabled() {
    this.access = false;
  }

  allow() {
    this.access = true;
  }

  isEnabled() {
    return this.access;
  }
}
