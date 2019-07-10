import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {products} from '../products';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  form;
  user;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private userService: UsersService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.user = this.userService.getUsers()[+params.get('userId')];

      this.form = this.fb.group({
        email: [this.user.email, [Validators.required, Validators.email]],
        passwordGroup: this.fb.group({
          password: ['', [Validators.pattern(/^[a-zA-Z0-9]+$/), Validators.minLength(7)]],
          confirmPassword: '',
        }, {
          validators: this.checkPasswords
        }),
        nickName: [this.user.nickName, [Validators.required, Validators.pattern(/^[a-zA-Z0-9 ._-]+$/)]],
        phoneNumber: [this.user.phoneNumber, [Validators.required, this.validatorPhone()]],
        website: [this.user.website, [
          Validators.required,
          Validators.pattern(/^(http:\/\/|https:\/\/)?[_a-z0-9]+(\.[_a-z0-9]+)*[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,7})$/)]
        ]
      });
    });
  }

  onSubmit() {
    this.userService.update(this.user, this.form.value);
  }

  checkPasswords(formGroup) {
    return formGroup.get('password').value === formGroup.get('confirmPassword').value ? null : {notSame: true};
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

  get passwordGroup() {
    return this.form.get('passwordGroup') as FormGroup;
  }

}
