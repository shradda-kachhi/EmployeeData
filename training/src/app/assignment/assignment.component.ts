import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
 toggle=false;
 timeList =[];
id:any;
counter=1;
 @Output('startGame') startGameEvent = new EventEmitter<number>();
@Input () dynamicCallComponent :number;

  constructor() { }

  ngOnInit(): void {
  }
  togFun()
  {
    this.toggle =!this.toggle;
this.timeList.push(new Date());
  }
  startGame()
  {
    console.log('This is coming from assignment '+ this.counter);
this.id =setInterval(()=>{
  this.startGameEvent.emit(this.counter);
  this.counter++;},1000);
  
  }
  stopGame()
  { 
if(this.id)
clearInterval(this.id);
  }
}
