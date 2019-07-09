import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users = this.registerService.getusers();
  david = 'dasda';
  constructor(
    private registerService: RegisterService
    ) {
      this.users = this.registerService.getusers();
     }

  ngOnInit() {
  }

  deleteUser(user) {
// tslint:disable-next-line: max-line-length
    if(!confirm(`You sure you want to remove ${this.registerService.getusers()}?`)) {
      return true;
    }
    this.registerService.deleteUser(user);
  }

}