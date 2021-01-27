import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,Validator, Validators, AbstractControl,FormArray } from '@angular/forms';
//we haave to make obj of control wfor each fields with formGroup
//Form array makes dynamic addition of conrtols possible

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private fb :FormBuilder) { }
//ngonit is an angular startup hook this is called after constructor
  ngOnInit(): void {
    this.loginForm = this.fb.group(
      {
        userName:this.fb.group({firstName:['',Validators.required], lastName:['',Validators.required] }),
        pass:['',[Validators.required,Validators.minLength(4),this.forbiddenPasswordValidator]],
        confirm:['',[Validators.required,Validators.minLength(4)]],
        email :['',],
        suscribe:[false],
        address :this.fb.array([])
      },{validator:this.confirmPasswordValidator}
      );
    
      //dependent validations when suscripeis true then only email is requitred
       this.loginForm.get('suscribe').valueChanges.subscribe(valuechange =>{
       let eM=  this.loginForm.get('email');
       if(valuechange)
        eM.setValidators(Validators.required);
        else
        eM.clearValidators();
        eM.updateValueAndValidity();//this is required to ontime updation of validity

       })
  
  }
get email()
{
return   this.loginForm.get('email');
}
  get pass(){
return this.loginForm.get('pass');
  }

  get address()
{
return this.loginForm.get('address') as FormArray;
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

//all form controls should be guiven in set value if you want to set some value use patchValue method
 loadData(){
   this.loginForm.setValue({
     userName:{ firstName:'dummyName',lastName:'lastDummy'},
     pass:'password',
     confirm:'confirm pass'
   });
 }

 //custom validators
 forbiddenPasswordValidator(controls :AbstractControl) 
 {
   let forbiddenWord = /[A-Z].*/.test(controls.value);// / defines the start  of regular expression
   
   return forbiddenWord ? {"forbiddenPassword" :{value:controls.value}} : null;
 }

 //cross filed validation of confirmpassword
 confirmPasswordValidator(controls :AbstractControl)
 {
   let  pass = controls.get("pass");
   let confirmPass = controls.get("confirm");
   // pass and confirm are not blank and are not equal
   return pass && confirmPass && pass.value !== confirmPass.value ? {"mismatch":{value:"password mismatch"}} :null;
 }
//this fuction is called to add a  address on users demand
 addAdress(){
   this.address.push(this.fb.control(''));
 }
}
