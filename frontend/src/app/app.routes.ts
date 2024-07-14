import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';

export const routes: Routes = [
    {path:'', component: EmployeeComponent},
    {path:'employee/:id', component: EmployeePageComponent},
];
