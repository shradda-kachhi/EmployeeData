import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipie } from '../recipie.model';
import { RecipieService } from '../recipies.service';

@Component({
  selector: 'app-recipie-details',
  templateUrl: './recipie-details.component.html',
  styleUrls: ['./recipie-details.component.css']
})
export class RecipieDetailsComponent implements OnInit {
//@Input() recipieSelected:Recipie; //Done through input set from ouside
recipieSelected:Recipie;
selectedRecId:number;
  constructor(private recipieService:RecipieService,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    //this will update the uid every  time it changes otherwise can do with snapshot
this.activeRoute.params.subscribe((par:Params)=>{
  //this + sign will convert into int
  this.selectedRecId=+par['id'];
  this.recipieSelected=this.recipieService.getRecipie(this.selectedRecId);
})
  }
  addToShoppingList(){
this.recipieService.addIngredsToShoppingList(this.recipieSelected.ingreds);
  }
}
