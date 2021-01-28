import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
 toggle=false;
 timeList =[];
  constructor() { }

  ngOnInit(): void {
  }
  togFun()
  {
    this.toggle =!this.toggle;
this.timeList.push(new Date());
  }
}
