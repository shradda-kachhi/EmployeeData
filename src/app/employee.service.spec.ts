import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;
let httpclientMock :any;
  beforeEach(() => {
    TestBed.configureTestingModule(
      {imports:[HttpClientModule],
    
      }
     );
    httpclientMock = jasmine.createSpyObj('HttpClient',['get','post'])
    service = TestBed.inject(EmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
