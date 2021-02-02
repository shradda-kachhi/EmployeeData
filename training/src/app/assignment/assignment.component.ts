import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InterComponentCommmService } from '../interComponent.service';


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
localarray:string[];
 @Output('startGame') startGameEvent = new EventEmitter<number>();
@Input () dynamicCallComponent :number;

  constructor(private interComponentServiceTalk:InterComponentCommmService) {
      //This essage will suscribe to the event emitted from the directive component
  //to check the inter component communication if an eventEmitter present inside  a
  //sertvice used byu both component
    this.interComponentServiceTalk.statusCheck.subscribe(
      (statusFromDirectComp:string)=>alert('This is oinside assignment comp,but this is from directive comp 12456'+statusFromDirectComp)
    )
   }

  ngOnInit(): void {
    this.localarray =this.interComponentServiceTalk.shartedarray;
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

  addTomArray(str:string){
    this.interComponentServiceTalk.addToArray(str);
  }

  
}
