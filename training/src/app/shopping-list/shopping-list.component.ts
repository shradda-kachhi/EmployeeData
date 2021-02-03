import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  
})
export class ShoppingListComponent implements OnInit {
 ingredients : Ingredient[];
  constructor(private shopServ:ShoppingService) { }

  ngOnInit(): void {
this.ingredients=this.shopServ.getIngredients();
//If we dont do this even the ingreds are added new ingreds would not be shown on chnge
this.shopServ.ingredChanged.subscribe((ingre:Ingredient[])=>this.ingredients=ingre)
  }

}
