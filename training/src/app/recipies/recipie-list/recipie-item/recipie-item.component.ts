import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Recipie } from '../../recipie.model';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css']
})
export class RecipieItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 @Input() recipieList:Recipie[];
  //@Output() sendDetails =new EventEmitter<Recipie>();

  sendReciDetails(re:Recipie){
//this.sendDetails.emit(re);
  }
}
