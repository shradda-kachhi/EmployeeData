import { Component, Input, OnInit } from '@angular/core';
import { Recipie } from '../recipie.model';
import { RecipieService } from '../recipies.service';

@Component({
  selector: 'app-recipie-details',
  templateUrl: './recipie-details.component.html',
  styleUrls: ['./recipie-details.component.css']
})
export class RecipieDetailsComponent implements OnInit {
@Input() recipieSelected:Recipie;
  constructor(private recipieService:RecipieService) { }

  ngOnInit(): void {
  }
  addToShoppingList(){
this.recipieService.addIngredsToShoppingList(this.recipieSelected.ingreds);
  }
}
