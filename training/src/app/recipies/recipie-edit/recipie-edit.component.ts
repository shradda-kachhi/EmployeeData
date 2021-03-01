import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipie } from '../recipie.model';
import { RecipieService } from '../recipies.service';

@Component({
  selector: 'app-recipie-edit',
  templateUrl: './recipie-edit.component.html',
  styleUrls: ['./recipie-edit.component.css']
})
export class RecipieEditComponent implements OnInit {
recId:number;
editMode=false;
recipieForm:FormGroup;
  constructor(private activeRoute:ActivatedRoute,private recService :RecipieService) { }

  ngOnInit(): void {
  

    //getting route params

    this.activeRoute.params.subscribe(
      (para:Params)=>{
        this.recId=+para['id'];
        this.editMode= para['id']!=null;
        console.log('In editMode ?'+this.editMode);
        //this will check if the id is not null than we are in edit route
        //otherwise in addNew route because both will end in this component only
        this.initForm();
       
      }
    )
  }
  onSubmit(){
    console.log(this.recipieForm);
    const newRec = new Recipie(this.recipieForm.get('recName').value,
    this.recipieForm.get('description').value,
    this.recipieForm.get('imgPath').value,
    this.recipieForm.get('ingredientList').value
    )
    console.log(newRec);
    if(this.editMode)
    {
      this.recService.updateRec(this.recId,newRec);
    }
    else{
      this.recService.addNewRecipie(newRec);
    }
  }
initForm(){
 let recname='';
  let recDesc='';
 let imageP ='';
 let ingredList =new FormArray([]);
  if(this.editMode ){
   const  rec =this.recService.getRecipie(this.recId);
   recname=rec.recipieName;
   recDesc = rec.description;
   imageP =rec.recipieImg;
  if(rec.ingreds!==null)
  {
    for(let ingre of rec.ingreds){
    ingredList.push(new FormGroup(
      {
        'ingredName':new FormControl(ingre.ingredName,Validators.required),
        'ingredAmnt':new FormControl(ingre.ingredAmnt,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
      }
    ));
    }
  }

  }
  this.recipieForm =new FormGroup(
    {
      'recName' :new FormControl(recname,Validators.required),
      'imgPath' : new FormControl(imageP,Validators.required),
      'description' : new FormControl(recDesc,Validators.required),
      'ingredientList': ingredList
    }
  );
}
ingredList(){
return (<FormArray>  this.recipieForm.get('ingredientList')).controls;
}

addIngredient(){
  (<FormArray> this.recipieForm.get('ingredientList')).push(
    new FormGroup(
      {
        'ingredName':new FormControl(null,Validators.required),
        'ingredAmnt':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
      }
    )
  );
}
}
