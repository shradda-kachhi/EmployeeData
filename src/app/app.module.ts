import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormControl, FormGroup, FormsModule,ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EmployeeService } from './employee.service';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import {HttpClientModule} from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewNavigationComponent } from './new-navigation/new-navigation.component';
import { ChildPageComponent } from './child-page/child-page.component';




@NgModule({
  declarations: [
    AppComponent,
     TestComponent,
     EmployeeDetailsComponent,
     PageNotFoundComponent,
     NewNavigationComponent,
     ChildPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule // provides simplified functionalities for http services
   //for reactive forms
  ],
  providers: [EmployeeService],
  // providers tells that theese are  to used in various componenets

  bootstrap: [AppComponent]
})
export class AppModule { }
