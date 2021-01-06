import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 loginForm = new FormGroup({
  userName :new FormGroup(
    {
      firstName: new FormControl(),
      lastName:new FormControl()
    }
  ),
pass :new FormControl(),
confirm :new FormControl(),

 });

 loadData(){//all form controls should be guiven in set value if you want to set some value use patchValue method
   this.loginForm.setValue({
     userName:{ firstName:'dummyName',lastName:'lastDummy'},
     pass:'password',
     confirm:'confirm pass'
   });
 }
}
