import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users;
  dialog = false;

  constructor(private usersService: UsersService) {
    this.users = this.usersService.getUsers();
  }

  ngOnInit() {
  }

  startDialog() {
    this.dialog = true;
  }

}
