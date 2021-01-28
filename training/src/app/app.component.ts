import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemyFirst';
  appDynamicList=[{type:'dynamic',content:'just a test content'}];

storeInParent(newData :{type :string,content:string})
{
  this.appDynamicList.push({type:newData.type,content:newData.content});
}
}
