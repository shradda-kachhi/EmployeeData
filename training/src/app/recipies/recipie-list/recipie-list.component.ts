import { Component, OnInit } from '@angular/core';
import { Recipie } from '../recipie.model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
recipies : Recipie []=[
  new Recipie('gulab jamun','sweet sweet',
  'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
  new Recipie('pani puri','sour sweet',
  'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')//all images cannot be shown 
];
  constructor() { }

  ngOnInit(): void {
  }

}
