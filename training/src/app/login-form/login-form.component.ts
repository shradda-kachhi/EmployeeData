import { Component, NgModule, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
;

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

  constructor() { }
  genders:string[]=['male','female'];
 signupForm:FormGroup;
 forbidNameArr =['admin','shradda'];

  ngOnInit(): void {
    this.signupForm = new FormGroup(
      { 'userData':new FormGroup({
        'userName': new FormControl(null,[Validators.required,this.forbiddenNameValidator.bind(this)]),
        'email':new FormControl(null,[Validators.required,Validators.email],this.forbiddenEmail)
      }),
        
        'gender':new FormControl(null),
        'hobbies':new FormArray([])
      }
    )
  }
myhobbies(){
  return (<FormArray>this.signupForm.get('hobbies')).controls;
}
  onSubmit()
  {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  addHobby(){
   (<FormArray> this.signupForm.get('hobbies')).push(new FormControl(null,Validators.required));
  }

  forbiddenNameValidator(cont:FormControl) 
  {//we can see this error incide the controls of formgroupo in errors
    if(this.forbidNameArr.indexOf(cont.value) !== -1)
    {
      return {'NameForbidden':true}
    }
   
    return null;
  }

  //asyn Validators
  forbiddenEmail(cont:FormControl): Promise<any> | Observable<any>
  {
    const pr = new Promise ((resolve,reject) =>
    {
      setTimeout(() =>
      {
        if(cont.value ==='test@test.com')
        {
          return resolve({'emailForbidden':true});
        }
        else{
          return resolve(null);
        }
      },1000)
    }

    );
    return pr;
  }
}
