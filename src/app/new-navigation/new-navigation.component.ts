import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router'
import { Employee } from '../employee';
 
@Component({
  selector: 'app-new-navigation',
  template: `
    <p>
      new-navigation works!
      you selected emplouyeeid as {{empId}}
      <a (click)= "goNext()"> go next</a>
    </p>
  `,
  styles: [
  ]
})
export class NewNavigationComponent implements OnInit {
 empId:number;
  constructor(private activeRoute: ActivatedRoute,private routeSame : Router) { }

  ngOnInit(): void {
    //if ! is not used it throws Argument of type 'string | null' is not assignable to parameter of type 'string'.
    // so ! says that it will never return null
    //if we use this method the empId will not be refreshed in same page navigation
 // this.empId = parseInt(this.activeRoute.snapshot.paramMap.get("id")!);

  //so we use this metod 
  //everytime we navigate to same page empId is refreshed
  this.activeRoute.paramMap.subscribe((param: ParamMap) => this.empId=parseInt(param.get("id")!));

  }

  //if we try to navigate from same componenet to the same coponent using navigate 
  //it will not chnage the employee id value

  goNext()
  {//if we try to go next but the emp id proertyu eill not change , 
    //because when we try to navigate to same page the page is not initialised again

this.routeSame.navigate(['newPage',this.empId+1]);
  }
}
