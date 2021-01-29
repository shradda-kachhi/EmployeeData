import { Component, EventEmitter, Output } from "@angular/core";


@Component(
    {
        selector:'app-header',
      templateUrl:'./header.component.html'  
    }
)
export class HeaderComponent{
 @Output() componentType =new EventEmitter<string>();

 componentTypeSelect(str:string)
 {
   this.componentType.emit(str);
 }
 

}