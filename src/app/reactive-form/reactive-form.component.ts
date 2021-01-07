import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,Validator, Validators, AbstractControl } from '@angular/forms';//we haave to make obj of control wfor each fields with formGroup

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private fb :FormBuilder) { }

  ngOnInit(): void {
  }
  get pass(){
return this.loginForm.get('pass');
  }
  //we have to initailaze form conrols manually
 /*
 loginForm = new FormGroup({
  userName :new FormGroup(
    {
      firstName: new FormControl(),
      lastName:new FormControl()
    }
  ),
pass :new FormControl(),
confirm :new FormControl(),

 });*/

 //form builder approach
 //form builder take object as parameter having all controls and eachj control is a array 
 //? only evaluates a object property when the object is not null or  undefined
 // ! telss that the  object is not null when compiler counnt find
  //1st param is default value
 // 2nd param is validation
 //for form group as well validator is 2nd param
loginForm = this.fb.group(
  {
    userName:this.fb.group({firstName:['',Validators.required], lastName:['',Validators.required] }),
    pass:['',[Validators.required,Validators.minLength(4),this.forbiddenPasswordValidator]],
    confirm:['',[Validators.required,Validators.minLength(4)]]
  },{validator:this.confirmPasswordValidator}
  );


 loadData(){//all form controls should be guiven in set value if you want to set some value use patchValue method
   this.loginForm.setValue({
     userName:{ firstName:'dummyName',lastName:'lastDummy'},
     pass:'password',
     confirm:'confirm pass'
   });
 }

 forbiddenPasswordValidator(controls :AbstractControl) 
 {
   let forbiddenWord = /[A-Z].*/.test(controls.value);// / defines the start  of regular expression
   
   return forbiddenWord ? {"forbiddenPassword" :{value:controls.value}} : null;
 }
 confirmPasswordValidator(controls :AbstractControl)
 {
   let  pass = controls.get("pass");
   let confirmPass = controls.get("confirm");
   // pass and confirm are not blank and are not equal
   return pass && confirmPass && pass.value !== confirmPass.value ? {"mismatch":{value:"password mismatch"}} :null;
 }
}
