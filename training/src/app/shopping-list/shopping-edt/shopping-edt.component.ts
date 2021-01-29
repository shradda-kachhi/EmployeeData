import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient';

@Component({
  selector: 'app-shopping-edt',
  templateUrl: './shopping-edt.component.html',
  styleUrls: ['./shopping-edt.component.css']
})
export class ShoppingEdtComponent implements OnInit {
@ViewChild('ingredName') ingredName:ElementRef;
@ViewChild('ingredAmount') ingredAmount :ElementRef;
@Output() sendIngred= new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }


  addIngredient()
  { 
this.sendIngred.emit(new Ingredient(this.ingredName.nativeElement.value,
  this.ingredAmount.nativeElement.value));
  }
}
