import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.scss']
})
export class EmployeeRegisterComponent implements OnInit {

  employees$;
  employeeRegister;

  constructor(
    private employeesService: EmployeesService,
    private formBuilder: FormBuilder) {
    this.employeeRegister = formBuilder.group({
      name: ['', [Validators.required]],
      salary: [, [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      age: [, [Validators.required, Validators.pattern(/^[0-9]+$/)]],
    });
  }

  ngOnInit() {
    this.employees$ = this.employeesService.getEmployees();
  }

  RegisterEmployees(newEmployee) {
    this.employeesService.RegisterEmployees(newEmployee).subscribe();
  }

}