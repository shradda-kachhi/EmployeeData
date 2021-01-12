import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Laptop } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.scss']
})
export class LaptopComponent implements OnInit {

  constructor(private fb:FormBuilder,private empService :EmployeeService) { }
 laptopDetail :FormGroup;
 errorMsg :string;
 laptopId :number;
 LapObject :Laptop;

  ngOnInit(): void {
this.laptopDetail =this.fb.group(
  {
    id : ['',[Validators.required]],
    brand :['',[Validators.required]]
  }
);
  }
  saveLaptopDetails(){
    console.log(this.laptopDetail.value);
    this.empService.saveLaptop(this.laptopDetail.value).
    subscribe(data =>this.errorMsg=data,error=>this.errorMsg=error);
  }
  getLaptopDetails()
  {
    console.log("get laptop details");
    this.empService.getLaptop(this.laptopId).subscribe(data=>this.LapObject=data,err=>this.errorMsg=err)
    console.log(this.LapObject.brandName);
  }
}
