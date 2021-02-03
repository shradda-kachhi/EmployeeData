

import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient";

export class ShoppingService{
  ingredChanged = new EventEmitter<Ingredient[]>();
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
    this.ingredChanged.emit(this.ingredients)
}
addIngredientsList(ingreds:Ingredient[]){
//we can simply loop in Ingreds array and call the addIngredient() method but that will emit a nuber of events
//we can simply add directly throu spreadd operator(...)
//because we c canbt directly push an array
this.ingredients.push(...ingreds);
this.ingredChanged.emit(this.ingredients);
}
}