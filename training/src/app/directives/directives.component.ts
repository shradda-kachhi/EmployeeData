import { Component, OnInit } from '@angular/core';
import { InterComponentCommmService } from '../interComponent.service';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  
})
export class DirectivesComponent implements OnInit {

  constructor(private injectService :InterComponentCommmService) { }
  booleanVar =false;
  localarray:string[];
  ngOnInit(): void {
    this.localarray =this.injectService.shartedarray;
  }

  innterComponentEventemit(){
    this.injectService.statusCheck.emit('From DirectiveComponent');
  }
  removeElementFromService(){
    this.injectService.removeFromarray();
  }
}
