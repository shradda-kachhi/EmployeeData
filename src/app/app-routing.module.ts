import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [//here we define avery routing comonents also add base tag in index html
  {path:'test',component: TestComponent},
  {path:'employeeDetails',component:EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
