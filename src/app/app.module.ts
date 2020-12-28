import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EmployeeService } from './employee.service';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
     TestComponent,
     EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule // provides simplified functionalities for http services
  ],
  providers: [EmployeeService],
  // providers tells that theese are  to used in various componenets

  bootstrap: [AppComponent]
})
export class AppModule { }
