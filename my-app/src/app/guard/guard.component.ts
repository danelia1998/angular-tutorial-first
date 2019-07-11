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

  allow() {
    this.authService.allow();
  }

  disabled() {
    this.authService.disabled();
  }

  get access() {
    return this.authService.isEnabled();
  }

}
