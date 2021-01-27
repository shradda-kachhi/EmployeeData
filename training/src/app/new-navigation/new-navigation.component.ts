import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router'
import { Employee } from '../employee';
 
@Component({
  selector: 'app-new-navigation',
  template: `
    <p>
      new-navigation works! <br>
      you selected emplouyeeid as {{empId}}<br>
      <button (click)= "goNext()"> go next</button><br>
      <button (click)="childPageLoad()">load details</button>
      <router-outlet></router-outlet>
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
  childPageLoad(){
    //we need the details page only if eployee page is opened
    //in such case we use child page navigation
    //we need <router-outlet> to make new routed page to appar
    this.routeSame.navigate(['child'],{relativeTo:this.activeRoute});//this relative path will add to tyhe existing route
  }
}
