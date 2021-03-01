

import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient";

export class ShoppingService{

 // ingredChanged = new EventEmitter<Ingredient[]>();
 //we can use Subject in place of event emitter when we only require cross component call
 //not with @Output
 ingredChanged = new Subject<Ingredient[]>();
 startedEditIngred  = new Subject<number>();
ingredients:Ingredient[]=[
    new Ingredient('Butter',10),
    new Ingredient('tomatoes',8)
  ];
  getIngredients(){
      return this.ingredients.slice();
  }
addIngredients(ingre:Ingredient){
    this.ingredients.push(ingre);
    //If we dont do this on chng of list otside it wouldnt be known
   // this.ingredChanged.emit(this.ingredients)
   //subject uses next not emit 
   this.ingredChanged.next(this.ingredients);
}
addIngredientsList(ingreds:Ingredient[]){
//we can simply loop in Ingreds array and call the addIngredient() method but that will emit a nuber of events
//we can simply add directly throu spreadd operator(...)
//because we c canbt directly push an array
this.ingredients.push(...ingreds);

//this.ingredChanged.emit(this.ingredients);
this.ingredChanged.next(this.ingredients);
}

getIngredient(index:number){
return this.ingredients[index];
}

updateIngredient(index:number,newIngred :Ingredient)
{
  this.ingredients[index]=newIngred;
  this.ingredChanged.next(this.ingredients);
}
removeIngred(inde:number){
  this.ingredients.splice(inde,1);
  this.ingredChanged.next(this.ingredients);
}
}