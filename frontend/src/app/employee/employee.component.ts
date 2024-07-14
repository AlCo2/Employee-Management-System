import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import {CommonModule} from '@angular/common';
import {Employee} from './employee';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [TableModule, DialogModule, ButtonModule, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{
  constructor(private employeeService:EmployeeService, private router: Router){}
  id?:number = 0;  
  firstname = new FormControl('');
  lastname = new FormControl('');
  email = new FormControl('');
  phone = new FormControl('');
  position = new FormControl('');
  department = new FormControl('');
  employees:Employee[] = [];
  visible: boolean = false;
  visible2: boolean = false;

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees()
  {
    this.employeeService.getEmployees().subscribe((employees)=>{this.employees = employees});
  }

  showDialog() {
    this.clearForm();
    this.visible = true;
  }

  onSubmit()
  {
    const employee = new Employee(this.firstname.value, this.lastname.value, this.email.value, this.phone.value, this.position.value, this.department.value);
    this.employeeService.addEmployee(employee).subscribe((response)=>this.fetchEmployees());
    this.clearForm();
  }

  updateButton(employee:Employee)
  {
    this.id = employee.id;
    this.firstname.setValue(employee.firstName);
    this.lastname.setValue(employee.lastName);
    this.email.setValue(employee.email);
    this.phone.setValue(employee.phoneNumber);
    this.position.setValue(employee.position);
    this.department.setValue(employee.department);
    this.visible2 = true;
  }

  updateEmployee()
  {
    const employee = new Employee(this.firstname.value, this.lastname.value, this.email.value, this.phone.value, this.position.value, this.department.value, this.id);
    this.employeeService.updateEmployee(employee).subscribe((response)=>this.fetchEmployees()); 
  }
  deleteEmployee(id:number)
  {
    this.employeeService.deleteEmployee(id).subscribe();
    this.employees = this.employees.filter(e => e.id!==id);
  }
  clearForm()
  {
    this.firstname.setValue('');
    this.lastname.setValue('');
    this.email.setValue('');
    this.phone.setValue('');
    this.position.setValue('');
    this.department.setValue('');
  }
  showEmployee(id:number)
  {
    this.router.navigate([`/employee/${id}`]);   
  }
}
