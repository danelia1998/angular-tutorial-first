import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users;
  clicked = false;

  constructor(
    private usersService: UsersService,
    private authService: AuthService) {
    this.users = usersService.users;
  }

  ngOnInit() {
  }

  click() {
    this.clicked = !this.clicked;
  }

  delete(user) {
    this.usersService.delete(user);
  }

  logOut() {
    this.authService.disabled();
  }

}
