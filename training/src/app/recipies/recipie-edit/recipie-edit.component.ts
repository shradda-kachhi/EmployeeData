import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipie-edit',
  templateUrl: './recipie-edit.component.html',
  styleUrls: ['./recipie-edit.component.css']
})
export class RecipieEditComponent implements OnInit {
recId:number;
editMode=false;
  constructor(private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    //getting route params
    this.activeRoute.params.subscribe(
      (para:Params)=>{
        this.recId=+para['id'];
        this.editMode= para['id']!=null;
        console.log('In editMode ?'+this.editMode);
        //this will check if the id is not null than we are in edit route
        //otherwise in addNew route because both will end in this component only
      }
    )
  }

}
