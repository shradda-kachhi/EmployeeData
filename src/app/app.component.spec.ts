import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';

describe('AppComponent', () => {
  let fixture : ComponentFixture<AppComponent>;
  beforeEach(async () => {
       await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
               BrowserModule,
          AppRoutingModule,
          FormsModule,
          HttpClientModule,
          ReactiveFormsModule // provides simplified functionalities for http services
         //for reactive forms
        ],
        providers: [EmployeeService,DatePipe],
      
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', () => {
    
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angularUI'`, () => {
   
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angularUI');
  });

  it('should render title', () => {
    
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    //the .content specifies the class used and then find the span uder it and check
    expect(compiled.querySelector('.content span').textContent).toContain('angularUI app is running!');
  });

  it('shopld have  buttons',() =>
  {
    
   const  buutonFix=fixture.debugElement.queryAll(By.css('button'));
   //this checks tghat there must be buttons present 1 ore more
    expect(buutonFix.length >= 1).toBeTruthy();
   
  });
  it('should have button LogIn Form', ()=>
  {//
const loginButon:HTMLButtonElement=fixture.debugElement.queryAll(By.css('button'))[2].nativeElement;
expect(loginButon.textContent).toBe('LogIn Form');
  });
 
});
