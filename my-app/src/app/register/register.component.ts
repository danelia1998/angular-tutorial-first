import { Component, OnInit, EventEmitter } from '@angular/core';
import { RegisterService } from '../register.service';
import {
  FormBuilder,
  Validators,
 } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  clicked = false;
  registrationForm;

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
  ) {
    this.registrationForm = formBuilder.group({
      email: ['', Validators.email ],
      password: ['', Validators.pattern(/[\w0-9]{8,}/) ],
      password_confirmation: ['', Validators.pattern(/[\w0-9]{8,}/) ],
      nickname: ['', Validators.pattern(/[\w0-9\-]+/) ],
      phone: ['', Validators.pattern(/\+380[0-9]{9}$/) ],
      website: ['', Validators.pattern(/(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/) ],
      checkAgreement: ['', this.checkbox ],
    }, { validators: this.checkPasswords } );
  }
  checkbox(checkAgreement) {
    return checkAgreement.value ? null : {};
  }

  checkPasswords(group) {

    const password = group.controls.password.value;
    const checkPasswords = group.controls.password_confirmation.value;

    return password === checkPasswords ? null : { confirm: false };
  }

  ngOnInit() {
  }

  get values() {
    return this.registrationForm.controls;
  }

  get disabled() {
    return this.registrationForm.invalid;
  }

  saveUsers() {
    this.registerService.addUsers(this.registrationForm.value);
    this.clicked = true;
  }

  check(user) {
    return this.registerService.check(user);
  }
}