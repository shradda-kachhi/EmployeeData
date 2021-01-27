import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Employee } from './employee';

import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;
let httpclientMock :any;

  beforeEach(() => {
    TestBed.configureTestingModule(
      {imports:[HttpClientModule],
    
      }
     );
     //We can do this bymaanually creating spy or
    //can import httpClientTesting Module
    httpclientMock = jasmine.createSpyObj('HttpClient',['get','post'])
    service = TestBed.inject(EmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //It checks the get method of employeeService
  it('Should Return the list of employees',()=>{
 const expectedList :Employee[] =[
  {
      "id": 1,
      "name": "emp_1",
      "joining_date": "18/12/2020",
      "salary": 5265
  },
  {
      "id": 2,
      "name": "emp_1",
      "joining_date": "18/12/2020",
      "salary": 5265
  },
  {
      "id": 3,
      "name": "emp_1",
      "joining_date": "18/12/2020",
      "salary": 5265
  },
  {
      "id": 4,
      "name": "shradda",
      "joining_date": "18/12/2020",
      "salary": 5265
  },
  {
      "id": 5,
      "name": "uzumaki naruto",
      "joining_date": "06/01/2021",
      "salary": 23568
  }
];

service.getEmployeeList().subscribe(data => {
  expect(data).toEqual(expectedList);
  expect(data.length).toBe(5);
},err =>expect(err).toEqual(undefined)
);
  });

  it('should return the employee with id 1',()=>
  {
    const emp :Employee={
      "id": 1,
      "name": "emp_1",
      "joining_date": "18/12/2020",
      "salary": 5265
  };
  service.getEmployee().subscribe(data =>
    {
expect(data.length).toEqual(emp);

    },err =>expect(err).toEqual(undefined));
  });

  it('should save the employeedata',()=>
  {
    const emp :Employee={
      "id": 895,
      "name": "emp_1",
      "joining_date": "18/12/2020",
      "salary": 5265
  };
service.saveEmployee(emp).subscribe(data =>
      expect(data).toEqual(895),err =>expect(err).toEqual(undefined)
  )
  });

  it('should save and return void',()=>
  {
    const lap ={
      "lapId": 569,
      "assetBrand": "delewtrel"
  }
  service.saveLaptop(lap).subscribe(data => expect(data).toEqual(null)
  ,err =>expect(err).toEqual(undefined))
  })
});
