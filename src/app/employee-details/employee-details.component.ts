import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  public  emp:Employee;
  public employeeList:Employee[];
  employeeForm:FormGroup;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
   this.employeeForm = new FormGroup({
     fullName:new FormControl(),
     email: new FormControl()
   });
  }

  getEmp()
  {
    this.employeeService.getEmployee().subscribe(something =>this.emp=something); 
    this.employeeService.getEmployeeList().subscribe(data => this.employeeList=data);
  }
  onSubmit()
  {
    console.log(this.employeeForm.value);
  }
}
