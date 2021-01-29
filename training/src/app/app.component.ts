import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemyFirst';
  appDynamicList=[{type:'dynamic',content:'just a test content'}];
  counter:number;
  selectedComp:string;

storeInParent(newData :{type :string,content:string})
{
  this.appDynamicList.push({type:newData.type,content:newData.content});
}
storeData(couter:number)
{
console.log('This is coming from appcomponent '+ couter)
this.counter=couter;
}

onComponentLoad(str:string)
{
  this.selectedComp=str;
}
}