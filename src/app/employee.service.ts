import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable  } from 'rxjs';
import {Employee} from './employee';
//injectable  tells angular thatr it may have difrent dependency
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
    private url:string='http://localhost:8080/EmployeeDetails/';
  constructor(private http:HttpClient) { }

  getEmployee():Observable<Employee>//observable is a return fom http rewquest
    { 
      console.log( "this.http.get<Employee>(this.url)");
   
     return  this.http.get<Employee>(this.url+"employee?id=1");
    }
    getEmployeeList():Observable<Employee[]>
    {
      console.log("het emplouyee list");
      return this.http.get<Employee[]>(this.url+"employeeList");
    }
}
