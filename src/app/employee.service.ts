import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError ,pipe } from 'rxjs';
import {Employee} from './employee';
import { HttpErrorResponse } from '@angular/common/http';
import {catchError} from 'rxjs/operators'

//injectable  tells angular thatr it may have difrent dependency
@Injectable({
  //and provided in tells that this service should  be created by root and can be used  by all
  providedIn: 'root'
})
export class EmployeeService {
    private url:string='http://localhost:8080/EmployeeDetails/';
  constructor(private http:HttpClient) { }

  getEmployee():Observable<Employee>//observable is a return fom http rewquest
    { 
      console.log( "this.http.get<Employee>(this.url)");
   
     return  this.http.get<Employee>(this.url+"employee?id=1").pipe(catchError(this.erroHandlerFun));
    }
    getEmployeeList():Observable<Employee[]>
    {
      console.log("het emplouyee list");
      return this.http.get<Employee[]>(this.url+"employeeList")
      .pipe(catchError(this.erroHandlerFun));
    }

    erroHandlerFun(error:HttpErrorResponse)
    {
  return throwError( "server ran into some trouble");
     
    }
}
