import { EventEmitter, Injectable } from "@angular/core";

//It is recommented to make it injectable if some other service is injected
@Injectable()
export class InterComponentCommmService{
//we want two componets to some how communicate
//it would take us to do @Input and @Output
//but some tiems we can do from service in required situation
//we can emit something from the component having this service
    statusCheck = new EventEmitter<string>();
 shartedarray :string[]=['srftrwe','etyetye'];

 addToArray(str:string){
     this.shartedarray.push(str);
 }
 removeFromarray(){
     this.shartedarray.splice(this.shartedarray.length-1);
 }
}