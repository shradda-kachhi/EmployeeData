import { Component, OnInit } from '@angular/core';

//component decorator tells that it is not a normal class but decorator and containsd
// all related data of that class
@Component({

  //can be declared as .app-test and used as class in any tag or [app-test]  as an tag attribute
  selector: 'app-test',
  //instead of templateUrl and styleURL can use template , styles and write the html code
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
    testName="interpolation";
    isdisabled =true;
    failProperty ="text-failure";//from csss
    public greeting="";
    public templateReference="";
    public twoWayBind="";
    displayName = true;
    switchcase ="red";
    arrayVar =["Naruto","Hinata","Sasuke"]
  constructor() { }

  ngOnInit(): void {
  }
  interpolationTest()
  {
    return "interploation test success from method call";
  }
  onClick(){
    this.greeting =' event binding';
  }
  templateReferenceFun(value :string)
  {
    this.templateReference =value +" from textbox";
  }
}
