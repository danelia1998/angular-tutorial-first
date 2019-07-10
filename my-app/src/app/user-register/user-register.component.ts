import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  form;

  constructor(fb: FormBuilder, public userService: UsersService) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      passwordGroup: fb.group({
        password: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/), Validators.minLength(7)]],
        confirmPassword: ['', Validators.required],
      }, {
        validators: this.checkPasswords
      }),
      nickName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9 ._-]+$/)]],
      phoneNumber: ['', [Validators.required, this.validatorPhone()]],
      website: ['', [
        Validators.required,
        Validators.pattern(/^(http:\/\/|https:\/\/)?[_a-z0-9]+(\.[_a-z0-9]+)*[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,7})$/)]
      ],
      agreement: ['', Validators.required]
    });
  }

  checkPasswords(formGroup) {
    return formGroup.get('password').value === formGroup.get('confirmPassword').value ? null : {notSame: true};
  }


  ngOnInit() {
  }

  validatorPhone() {
    return (formControl) => {
      const value = formControl.value as string;
      return value &&
      value.substr(0, 4) === '+380' &&
      value.substring(4).length === 9 &&
      /^\d+$/.test(value.substring(4)) ? null : {format: {invalid: true}};
    };
  }

  onSubmit() {
    this.userService.store(this.buildUser());
    this.form.reset();
  }


  buildUser() {
    const user = {
      email: this.form.get('email').value,
      password: this.form.get('passwordGroup').get('password').value,
      nickName: this.form.get('nickName').value,
      phoneNumber: this.form.get('phoneNumber').value,
      website: this.form.get('website').value,
    };

    return user;
  }

  get email() {
    return this.form.get('email') as FormControl;
  }

  get password() {
    return this.form.get('passwordGroup').get('password') as FormControl;
  }

  get confirmPassword() {
    return this.form.get('passwordGroup').get('confirmPassword') as FormControl;
  }

  get nickName() {
    return this.form.get('nickName') as FormControl;
  }

  get phoneNumber() {
    return this.form.get('phoneNumber') as FormControl;
  }

  get website() {
    return this.form.get('website') as FormControl;
  }

  get agreement() {
    return this.form.get('agreement') as FormControl;
  }

  get passwordGroup() {
    return this.form.get('passwordGroup') as FormGroup;
  }

}
