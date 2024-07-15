import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = "http://localhost:5152";

  constructor(private http:HttpClient) { }

  // get all employees from api
  getEmployees():Observable<any>
  {
    return this.http.get(`${this.url}/api/employee`);
  }
  // get employee using its id from api
  getEmployeeById(id:number)
  {
    return this.http.get<Employee>(`${this.url}/api/employee/${id}`);
  }
  // add new employee to the database
  addEmployee(employee:Employee)
  {
    return this.http.post<Employee>(`${this.url}/api/employee`, employee);
  }
  // update data of an employee
  updateEmployee(employee:Employee)
  {
    return this.http.put(`${this.url}/api/employee/${employee.id}`, employee);
  }
  // delete an employee
  deleteEmployee(id?:number)
  {
    return this.http.delete(`${this.url}/api/employee/${id}`)
  }
}
