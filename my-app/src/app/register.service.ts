import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable ({
    providedIn: 'root'
})
export class RegisterService {
    users = [];
    constructor(
        private http: HttpClient
    ) {}

    addUsers(user) {
        this.users.push(user);
    }
    getusers() {
        return this.users;
    }

    check(user) {
        return this.users.includes(user);
    }

    deleteUser(user) {
        this.users.splice(this.users.indexOf(user), 1);
    }
}
