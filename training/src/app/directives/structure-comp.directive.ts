import { Directive, Input, TemplateRef, ViewContainerRef,  } from "@angular/core";

@Directive(
    {
        selector:'[appUnless]'
    }
)
export class CustomSTructureDirective{
    //this is to set yur own structural directive
    //this name should be eqal to selector name or should be given alias
 @Input('appUnless') set appUless(condition:boolean){
     if(!condition){
this.vieRef.createEmbeddedView(this.templateRef);
     }
     else{
         this.vieRef.clear();
     }
 }
 constructor(private templateRef:TemplateRef<any>,private vieRef:ViewContainerRef){}
 //template reference gives the ng template that is internally created on structural directive
 //and vie ref creates the new view
}