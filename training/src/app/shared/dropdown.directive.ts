import { Directive, HostBinding, HostListener, OnInit } from "@angular/core";

@Directive(
    {
        selector:'[appDrop]'
    }
)
export class appDropDownDirective {
    
   //open is a bootsrap property that we will set from here
    @HostBinding('class.open') opendrop=false;

   
    @HostListener('click') isDropopen(){
        this.opendrop =!this.opendrop;
    }
}