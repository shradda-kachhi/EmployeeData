
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient";
import { ShoppingService } from "../shopping-list/shopping.service";
import { Recipie } from "./recipie.model";
@Injectable() //to make other service injected in this service
export class RecipieService{
  constructor(private shopServ :ShoppingService){}
  recipieList:  Recipie []=[
        new Recipie('Schnitzel','fries fries',
        'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
        [new Ingredient('Meat',1),new Ingredient('fries',15)]),
        new Recipie('burger','sour sweet',
        'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
        [new Ingredient('potato chap',1),new Ingredient('Bread',2)])//all images cannot be shown 
      ];

      selectedRecipie= new EventEmitter<Recipie>();

      getRecipieList(){
          //slice with no argument will return the copy of list not the refernce of original list
          return this.recipieList.slice();
      }

      addIngredsToShoppingList(ingreds:Ingredient[]){
this.shopServ.addIngredientsList(ingreds);
      }
    
}