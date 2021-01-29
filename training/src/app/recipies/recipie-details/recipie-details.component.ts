import { Component, Input, OnInit } from '@angular/core';
import { Recipie } from '../recipie.model';

@Component({
  selector: 'app-recipie-details',
  templateUrl: './recipie-details.component.html',
  styleUrls: ['./recipie-details.component.css']
})
export class RecipieDetailsComponent implements OnInit {
@Input() recipieSelected:Recipie;
  constructor() { }

  ngOnInit(): void {
  }

}
