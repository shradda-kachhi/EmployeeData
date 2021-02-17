import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { InterComponentCommmService } from '../interComponent.service';
import { map ,filter,} from 'rxjs/operators';


@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit ,OnDestroy{
 toggle=false;
 timeList =[];
id:any;
counter=1;
localarray:string[];
observCheck:Subscription;

 @Output('startGame') startGameEvent = new EventEmitter<number>();
@Input () dynamicCallComponent :number;

  constructor(private interComponentServiceTalk:InterComponentCommmService,private actRoute:ActivatedRoute) {
      //This essage will suscribe to the event emitted from the directive component
  //to check the inter component communication if an eventEmitter present inside  a
  //sertvice used byu both component
    this.interComponentServiceTalk.statusCheck.subscribe(
      (statusFromDirectComp:string)=>alert('This is oinside assignment comp,but this is from directive comp 12456'+statusFromDirectComp)
    )
   }
  

  ngOnInit(): void {
    this.localarray =this.interComponentServiceTalk.shartedarray;
    //retreive  the query para,meters from active route
    console.log(this.actRoute.snapshot.queryParams.name);
    console.log(this.actRoute.snapshot.fragment);
    this.customCountObservable();
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

  customCountObservable(){
const customObserver= new  Observable(observer =>{
  let count = 0;
setInterval(()=>{
  observer.next(count);//emits new value
  if(count===2)
  {
    observer.complete();//completes  as an http  observable completes once response is given
  }
  if(count==3)
  {
    observer.error(new Error('message for error custom observcer')); //throw error
  }
  count++;
},1000)
});

//use diffrent operators with pipe function on observable to change 
//it acordinggly but just  like java streams it only manipulate on copy
//original data remeins intact.
//pipe can take any number ofg prams that are operators
customObserver.pipe(filter((data)=>{return data>1}),map((data)=>{ return 'from map '+ data})).subscribe
((dat)=>console.log(dat));
//we can suscribe it any whwere
this.observCheck=customObserver.subscribe((data)=>{
  console.log('this is from custom observer '+ data);},err=>{
    alert(err);
  },()=>console.log('this argument can be givn in case observable is completed and it is never shown if error occurs'));

  }
  
  ngOnDestroy(): void {
  this.observCheck.unsubscribe();
  }
}
