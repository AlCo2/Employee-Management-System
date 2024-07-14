import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getEmployees():Observable<any>
  {
    return this.http.get('http://localhost:5152/api/employee');
  }
  getEmployeeById(id:number)
  {
    return this.http.get<Employee>(`http://localhost:5152/api/employee/${id}`);
  }
  addEmployee(employee:Employee)
  {
    return this.http.post<Employee>("http://localhost:5152/api/employee", employee);
  }
  
  updateEmployee(employee:Employee)
  {
    return this.http.put(`http://localhost:5152/api/employee/${employee.id}`, employee);
  }

  deleteEmployee(id?:number)
  {
    return this.http.delete(`http://localhost:5152/api/employee/${id}`)
  }
}
