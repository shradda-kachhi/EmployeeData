import { Component } from "@angular/core";

@Component ({
    selector :'app-first',//we can have a class like '.app-firs' and as an element [app-first]
    templateUrl :'./first.component.html',
    styles :['.ngclasstest{color:blue;background-color:pink};']//its an array because we can have more than one file
})
export class FirstComponent{
changeDisabled=false;
inputEvent='';
assgTextBox ='';
dynamicList = [];
    constructor(){
        //this is an angular fuction takes two parameter
        //first is the function 2nd the timout time when you have to run that function
    setTimeout(()=>this.changeDisabled=true,2000);
}

onEachKeyInput(event:Event){
    console.log(event);
this.inputEvent=(<HTMLInputElement> event.target).value;
console.log(this.inputEvent);
}
getColor(){
    return 'turquoise';
}
addtoList(val)
{
this.dynamicList.push(val);
}}