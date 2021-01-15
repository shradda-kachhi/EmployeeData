import { DatePipe } from '@angular/common';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';

import { AppComponent } from '../app.component';
import { EmployeeService } from '../employee.service';



import { EmployeeDetailsComponent } from './employee-details.component';

describe('EmployeeDetailsComponent', () => {
  let component: EmployeeDetailsComponent;
  let fixture: ComponentFixture<EmployeeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsComponent ],
      imports :[RouterTestingModule,FormsModule,ReactiveFormsModule],
      providers :[
        //This will tell that we only need aa stub of actual service that will return hardcoded value
        //Actual service test will happen in employeeservice that is why we are using stub
        {provide:EmployeeService,useClass:EmployeeServiceStub},
        AppComponent,DatePipe
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an h2 tag' ,()=>{
const h2Ele=fixture.debugElement.query(By.css( 'h2'));
expect(h2Ele.nativeElement.textContent).toBe( 'Template driven Form');
  });
});
export class EmployeeServiceStub{
  getEmployee():Observable<any>
  {//this stub function returs empty observable this is required because from ngoninit we are calling
    return of(['']);
  }
}