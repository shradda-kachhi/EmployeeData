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
 LapObject = new Laptop(0,'');

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
  getLaptopDetails(i : string)
  {
    console.log("get laptop details");
    this.empService.getLaptop(parseInt(i)).subscribe((data ) => {this.LapObject.assetBrand= data.assetBrand; this.LapObject.lapId=data.lapId},err=>this.errorMsg=err)
    console.log(this.LapObject);
  }
}
