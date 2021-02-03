import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edt',
  templateUrl: './shopping-edt.component.html',
  styleUrls: ['./shopping-edt.component.css']
})
export class ShoppingEdtComponent implements OnInit {
@ViewChild('ingredName') ingredName:ElementRef;
@ViewChild('ingredAmount') ingredAmount :ElementRef;
//from custom event
//@Output() sendIngred= new EventEmitter<Ingredient>();
  constructor(private shopService:ShoppingService) { }

  ngOnInit(): void {
  }


  addIngredient()
  { //dont need to emit anything just call service method
//this.sendIngred.emit(new Ingredient(this.ingredName.nativeElement.value, this.ingredAmount.nativeElement.value));
  
this.shopService.addIngredients(new Ingredient(this.ingredName.nativeElement.value,
   this.ingredAmount.nativeElement.value));
  }
}
