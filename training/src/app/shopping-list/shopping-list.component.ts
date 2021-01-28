import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
 ingredients : Ingredient[]=[
   new Ingredient('Butter',10),
   new Ingredient('tomatoes',8)
 ];
  constructor() { }

  ngOnInit(): void {
  }

}
