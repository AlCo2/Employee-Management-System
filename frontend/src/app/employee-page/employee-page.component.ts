import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee/employee.service';
import { Employee } from '../employee/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-employee-page',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, DialogModule],
  templateUrl: './employee-page.component.html',
  styleUrl: './employee-page.component.css'
})
export class EmployeePageComponent implements OnInit{
  employee:Employee = new Employee('', '', '', '', '', '');
  firstname = new FormControl('');
  lastname = new FormControl('');
  email = new FormControl('');
  phone = new FormControl('');
  position = new FormControl('');
  department = new FormControl('');
  visible: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private employeeService:EmployeeService){}
  
  ngOnInit(): void {
    this.fetchEmployee();
  }
  
  updateButton(e:Employee)
  {
    this.firstname.setValue(e.firstName);
    this.lastname.setValue(e.lastName);
    this.email.setValue(e.email);
    this.phone.setValue(e.phoneNumber);
    this.position.setValue(e.position);
    this.department.setValue(e.department);
    this.visible = true;
  }
  updateEmployee()
  {
    const e = new Employee(this.firstname.value, this.lastname.value, this.email.value, this.phone.value, this.position.value, this.department.value, this.employee?.id);
    this.employeeService.updateEmployee(e).subscribe((response)=>this.fetchEmployee()); 
  }
  
  deleteEmployee()
  {
    this.employeeService.deleteEmployee(this.employee?.id).subscribe();
    this.goBack();
  }

  goBack()
  {
    this.router.navigate(['/']);
  }

  fetchEmployee()
  {
    this.route.params.subscribe( params => this.employeeService.getEmployeeById(params['id']).subscribe((response)=>{this.employee = response;}));
  }
}
