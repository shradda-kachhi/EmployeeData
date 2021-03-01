import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edt',
  templateUrl: './shopping-edt.component.html',
  styleUrls: ['./shopping-edt.component.css']
})
export class ShoppingEdtComponent implements OnInit,OnDestroy {
  //dont need now because working wth TD forms
// @ViewChild('ingredName') ingredName:ElementRef;
// @ViewChild('ingredAmount') ingredAmount :ElementRef;

//from custom event
//@Output() sendIngred= new EventEmitter<Ingredient>();

@ViewChild('shoppingForm') shoppingForm:NgForm;

suscrip = new Subscription();
editIndex :number;
editMode =false;
editIngred :Ingredient;
  constructor(private shopService:ShoppingService) { }
 

  ngOnInit(): void {
    this.suscrip=this.shopService.startedEditIngred.subscribe((index:number)=>{
      this.editIndex=index;
      this.editMode =true;
      this.editIngred = this.shopService.getIngredient(index);
      this.shoppingForm.setValue(
        {
          ingredName:this.editIngred.ingredName,
          ingredAmount:this.editIngred.ingredAmnt
        }
      )

      }
    )};

    addIngredient(form:NgForm)
    { //dont need to emit anything just call service method
  //this.sendIngred.emit(new Ingredient(this.ingredName.nativeElement.value, this.ingredAmount.nativeElement.value));
  const  val = form.value
  if(this.editMode)
  {
    this.shopService.updateIngredient(this.editIndex,new Ingredient(val.ingredName,val.ingredAmount));
    this.editMode=false;
  }
  else{
  this.shopService.addIngredients(new Ingredient(val.ingredName,val.ingredAmount));
    }
    this.shoppingForm.reset();
  }
    ngOnDestroy():void{
this.suscrip.unsubscribe();
    }

    delete(){
      this.shopService.removeIngred(this.editIndex);
      this.shoppingForm.reset();
      this.editMode=false;
    }
  }
  
 

 
