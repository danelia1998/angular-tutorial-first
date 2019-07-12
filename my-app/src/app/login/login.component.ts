import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { UsersService } from '../users.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private authService: AuthService
  ) {
    this.loginform = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.pattern(/^[a-z0-9]*$/i), Validators.minLength(8)]],
    }, {
    });
  }

  ngOnInit() {
  }

  get email() {
    return this.loginform.get('email') as FormControl;
  }

  get password() {
    return this.loginform.get('password') as FormControl;
  }


  logIn() {
    const users = this.usersService.getUsers();

    const log = {
      email: this.email.value,
      password: this.password.value,
    };

    // tslint:disable-next-line: forin
    for (let each of users) {
      console.log(each);
      console.log(each.email);
      console.log(each.password);
      if (each.email === log.email && each.password === log.password) {
        console.log('Match!');
        this.allow();
      } else {
        this.disabled();
      }
    }
    console.log(log.email);
    console.log(log.password);
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
