import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class UsersService {
    constructor() { }

    users = [];

    register(user) {
        this.users.push(user);
        window.alert('Registration Successful!');
    }

    delete(user) {
        this.users.splice(this.users.indexOf(user), 1);
    }
}
