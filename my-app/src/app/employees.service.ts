import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

interface IEmployee {
  id: string;
  employee_name: string;
  employee_salary: string;
  employee_age: string;
}
@Injectable({
  providedIn: 'root'
})

export class EmployeesService {
  host = 'http://dummy.restapiexample.com/api/v1';

  constructor(
    private httpClient: HttpClient
  ) { }
  
  getEmployees() {
    const url = `${this.host}/employees`;
    return this.httpClient.get(url)
      .pipe(map((employees: Array <IEmployee>) => {
        const employeesTransformes = employees.map( (employee) => {
          const { id, employee_name, employee_salary, employee_age } = employee;
          const employeeTransformed = {
            id,
            name : employee_name,
            salary:  employee_salary,
            age: employee_age
          };
          return employeeTransformed;
        });
        return employeesTransformes;
      }));
  }
  RegisterEmployees(newEmployee: IEmployee) {
    const url = `${this.host}/create`;
    return this.httpClient.post<IEmployee>(url, newEmployee);
  }
  getEmployeeByID(userId) {
    return this.httpClient.get(`${this.host}/employee/${userId}`).pipe(map((employee: IEmployee) => {
      const { id, employee_name, employee_salary, employee_age } = employee;
      return {
        id,
        name: employee_name,
        salary: employee_salary,
        age: employee_age
      };
    }));
  }
}
