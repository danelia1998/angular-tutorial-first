import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  registerForm;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService
  ) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.pattern(/^[a-z0-9]*$/i), Validators.minLength(8)]],
      confirm: ['',  [Validators.required, Validators.pattern(/^[a-z0-9]*$/i), Validators.minLength(8)]],
      nickname: ['', [Validators.pattern(/^[a-z0-9-]*$/i), Validators.required]],
      phone: ['', [Validators.pattern(/^\+380[0-9]*$/), Validators.minLength(13), Validators.required]],
      website: ['', [Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/),
       Validators.required]],
      checkbox: ['', Validators.required]
    }, {
      validators: this.isMatched
    });
  }

  ngOnInit() {
  }

  isMatched(group) {
    const pass = group.get('password').value;
    const confirm = group.get('confirm').value;

    return pass === confirm ? null : { passwordsDontMatch: true };
  }

  get email() {
    return this.registerForm.get('email') as FormControl;
  }

  get password() {
    return this.registerForm.get('password') as FormControl;
  }

  get confirm() {
    return this.registerForm.get('confirm') as FormControl;
  }

  get nickname() {
    return this.registerForm.get('nickname') as FormControl;
  }

  get phone() {
    return this.registerForm.get('phone') as FormControl;
  }

  get website() {
    return this.registerForm.get('website') as FormControl;
  }

  get checkbox() {
    return this.registerForm.get('checkbox') as FormControl;
  }

  register() {
    const user = {
      email: this.email.value,
      password: this.password.value,
      nickname: this.nickname.value,
      phone: this.phone.value,
      website: this.website.value
    };

    this.usersService.register(user);
    this.registerForm.reset();
  }

}
