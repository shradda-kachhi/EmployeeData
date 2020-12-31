import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { NewNavigationComponent } from './new-navigation/new-navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestComponent } from './test/test.component';

//here we define avery routing comonents also add base tag in index html
const routes: Routes = [
 {path:'',component:PageNotFoundComponent},//this is for  empty url localhost:4200
  {path:'test',component: TestComponent},
  {path:'employeeDetails',component:EmployeeDetailsComponent},
  {path:'newPage/:id',component:NewNavigationComponent},//this is for routing using id var
{path:"**",component:PageNotFoundComponent}//this is a wild card routing so invalid url will show the default not found error but not in console
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
