import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginform;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService
  ) {
    this.loginform = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.pattern(/^[a-z0-9]*$/i), Validators.minLength(8)]],
    }, {
      validators: this.isMatched
    });
  }

  ngOnInit() {
  }

  isMatched(group) {
    const pass = group.get('password').value;

    return pass === confirm ? null : { passwordsDontMatch: true };
  }

  get email() {
    return this.loginform.get('email') as FormControl;
  }

  get password() {
    return this.loginform.get('password') as FormControl;
  }

  ifMatch() {
    const users = this.usersService.getUsers();
    return users[0];
  }

  logIn() {
    this.ifMatch();
  }

}
