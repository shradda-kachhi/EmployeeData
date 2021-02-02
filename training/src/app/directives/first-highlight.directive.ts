import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive(
    {
        selector :'[highLight]'//brackets  say that b it should be used as attribute not tag
    }
)
export class BasicHighlightDirective implements OnInit{
    constructor(private elemtRef :ElementRef,private render :Renderer2){  }
    //through jhost binding we can give dynamic styles to elements
    
    @Input() defaultColor ='red';
    @Input() hoveredColor ='blue';
    
     @HostBinding('style.color') stringColor:string;

    ngOnInit(){
      // this.elemtRef.nativeElement.style.backgroundColor ='green';
      // this.elemtRef.nativeElement.style.color ='white';

//we can directly use only elemetRef for  stuling but usng renderr is good
// this.render.setStyle(this.elemtRef.nativeElement,'background-color','pink');
// this.render.setStyle(this.elemtRef.nativeElement,'color','black');
this.stringColor=this.defaultColor;
    }

    @HostListener('mouseenter') hove (eventdat:Event)
    {
       // this.render.setStyle(this.elemtRef.nativeElement,'background-color','red');
     
    }

    @HostListener('click') mouClick (eventdat:Event)
    {
        this.render.setStyle(this.elemtRef.nativeElement,'background-color','green');
        this.stringColor=this.hoveredColor;//this is required for host binding dynamis setting var
    }
    
    @HostListener('mouseleave') movuRemove (eventdat:Event)
    {
        this.render.setStyle(this.elemtRef.nativeElement,'background-color','transparent');
    }
}