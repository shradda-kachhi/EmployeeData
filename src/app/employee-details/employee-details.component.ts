import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {  Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  public  emp:Employee;
  public employeeList:Employee[];
  employeeForm:FormGroup;
 public  errorMsg:string ;
 public typeList=['permanent','contractual','intern'];
 public empObject  =this.app.empObject;
public showSelectError:Boolean=false;
public empType:string;
public showMsg:any;

  constructor(private employeeService: EmployeeService,private route:Router,
    private app :AppComponent, private datePipe :DatePipe) { }

  ngOnInit(): void {
   this.employeeForm = new FormGroup({
     fullName:new FormControl(),
     email: new FormControl()
   });
  this.getEmp();
  }

  getEmp()
  {
    this.employeeService.getEmployee().subscribe(something =>this.emp=something ,err =>this.errorMsg=err); 
    this.employeeService.getEmployeeList().subscribe(data => this.employeeList=data, err =>this.errorMsg=err);
  }
  onSubmit()
  {
    console.log(this.employeeForm.value);
  }
 
  onEmpClick(someEmp:Employee)
  {
    // this routes to the existing routes present in app routing and takes 2 params  
    //1 name 2 id that yiou gave in routing path
    //to print this in new Page we have to use activatedRoute
this.route.navigate(['newPage',someEmp.id])
  }
 
  validateSelect(value:string)
  {
    if(value==='default')
    this.showSelectError=true;
    else
    this.showSelectError=false;
  }
  saveEmployee(){
    console.log("inside Save Emplyee method");
  

    this.empObject.joining_date= this.datePipe.transform(this.empObject.joining_date,'dd/MM/yyyy');
    
    console.log(this.empObject);
    
    this.employeeService.saveEmployee(this.empObject).
    subscribe(returnId => this.showMsg=returnId,err => this.errorMsg =err);

  }
}
