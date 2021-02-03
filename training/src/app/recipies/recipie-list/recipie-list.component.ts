import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipie } from '../recipie.model';
import { RecipieService } from '../recipies.service';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
recipies : Recipie[];
//@Output() selectedRec =new EventEmitter<Recipie>(); We can do this with service having the event emitter
  constructor(private recipieService:RecipieService) { }

  ngOnInit(): void {
    this.recipies=this.recipieService.getRecipieList();
  }
  acceptReciItem(rec:Recipie)
  {
   // this.selectedRec.emit(rec);
   //through services
this.recipieService.selectedRecipie.emit(rec);
  }
}
