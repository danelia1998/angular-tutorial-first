import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users;

  public getUsers() {
    return this.users;
  }

  public store(user) {
    this.users.push(user);
    window.alert('User was saved');
  }

  public update(user, data) {
    const oldUser = this.users[this.users.indexOf(user)];

    oldUser.email = data.email;
    oldUser.nickName = data.nickName;
    oldUser.website = data.website;
    oldUser.phoneNumber = data.phoneNumber;
    oldUser.password = data.passwordGroup.password ? data.passwordGroup.password : oldUser.password;

    window.alert('User was updated');
  }
}
