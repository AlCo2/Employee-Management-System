import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee/employee.service';
import { Employee } from '../employee/employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-page',
  standalone: true,
  imports: [],
  templateUrl: './employee-page.component.html',
  styleUrl: './employee-page.component.css'
})
export class EmployeePageComponent implements OnInit{
  employee?:Employee;
  constructor(private route: ActivatedRoute, private router: Router, private employeeService:EmployeeService){}
  
  ngOnInit(): void {
    this.route.params.subscribe( params => this.employeeService.getEmployeeById(params['id']).subscribe((response)=>{this.employee = response;}));
  }
  goBack()
  {
    this.router.navigate(['/']);
  }
}
