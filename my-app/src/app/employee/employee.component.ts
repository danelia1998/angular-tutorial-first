import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../employees.service';
import { state, trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        top: '200px'
      })),
      state('close', style({
        top: '-300px'
      })),
      transition('open <=> close', [
        animate('1s')
      ])
    ])
  ]
})
export class EmployeeComponent implements OnInit {
  currentEmployee;
  deleteClicked = false;
  pop = false;

  constructor(
    private router: Router,
    private routeState: ActivatedRoute,
    private employeesService: EmployeesService
  ) { }

  ngOnInit() {
    this.routeState.paramMap.subscribe(params => {
      this.employeesService.getEmployeeByID(+params.get('employeeId')).subscribe((data) => {
        this.currentEmployee = { ...data };
        console.log(data);
      });
    });
  }
  deleteAction() {
    return this.deleteClicked = !this.deleteClicked;
  }

  delete() {
    this.employeesService.delete(this.currentEmployee).subscribe();
    this.router.navigate(['employees']);
  }

  popUp() {
    this.pop = true;
  }

   hide() {
    this.pop = false;
  }
}
