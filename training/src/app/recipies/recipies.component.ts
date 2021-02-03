import { Component, OnInit } from '@angular/core';
import { Recipie } from './recipie.model';
import { RecipieService } from './recipies.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
  providers:[RecipieService]//this will provide service inside the chil of the component
})
export class RecipiesComponent implements OnInit {

  constructor(private recservice :RecipieService) { }
  //this was for when we were doing intercompo comm through input output
  selectedRec :Recipie;
  ngOnInit(): void {
    this.recservice.selectedRecipie.subscribe((rec:Recipie)=>this.selectedRec=rec );
  }
  
}
