import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  
})
export class ShoppingListComponent implements OnInit ,OnDestroy{
 ingredients : Ingredient[];
 doNotForgetTounscribe :Subscription;
  constructor(private shopServ:ShoppingService) { }


  ngOnInit(): void {
this.ingredients=this.shopServ.getIngredients();
//If we dont do this even the ingreds are added new ingreds would not be shown on chnge
this.doNotForgetTounscribe=this.shopServ.ingredChanged.subscribe((ingre:Ingredient[])=>this.ingredients=ingre)
  }

  ngOnDestroy(): void {
    this.doNotForgetTounscribe.unsubscribe();
  }

  onEditIngred(i:number){
    this.shopServ.startedEditIngred.next(i);
  }
}
