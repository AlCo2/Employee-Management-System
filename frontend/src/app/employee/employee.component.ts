import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import {CommonModule} from '@angular/common';
import {Employee} from './employee';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from './employee.service';
interface e{
  id:number,
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  position: string,
  department: string,
}
@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [TableModule, DialogModule, ButtonModule, CommonModule, FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{
  constructor(private employeeService:EmployeeService){}

  employees:e[] = [];
  employee = new Employee('', '', '', '', '', '');
  visible: boolean = false;

  ngOnInit(): void {
    this.fetchEmployees();
  }
  fetchEmployees()
  {
    this.employeeService.getEmployees().subscribe((employees)=>{this.employees = employees});
  }
  showDialog() {
    this.visible = true;
  }
  onSubmit()
  {
    this.employeeService.addEmployee(this.employee).subscribe((response)=>{this.fetchEmployees();});
    this.employee = new Employee('', '', '', '', '', '');
  }
  deleteEmployee(id:number)
  {
    this.employeeService.deleteEmployee(id).subscribe();
    this.employees = this.employees.filter(e => e.id!==id);
  }
}
