import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-guard',
  templateUrl: './guard.component.html',
  styleUrls: ['./guard.component.scss']
})
export class GuardComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  get access() {
    return this.authService.isUserAuthenticated() ? 'Allowed' :  'Blocked'};

  allow() {
    return this.authService.allowAccess();
  }
  block() {
    return this.authService.blockAccess();
  }
}
