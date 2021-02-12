import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthGuard } from '../auth-guard.service';
import { DummyAuthenticator } from '../dummy-authenticator.service';
import { InterComponentCommmService } from '../interComponent.service';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  
})
export class DirectivesComponent implements OnInit {

  constructor(private injectService :InterComponentCommmService,
    private router:Router,private activeRoute :ActivatedRoute,private authService:DummyAuthenticator) { }

  booleanVar =false;
  localarray:string[];
  user: {id:number,name:string};
  ngOnInit(): void {
    this.localarray =this.injectService.shartedarray;
    //this will only be called once so if   reload the page through router again with some other value than 
    //in html userid name will not be changed
    this.user={
      id:this.activeRoute.snapshot.params['id'],
   name: this.activeRoute.snapshot.params['name']};
//use params to get observable//this will load the new name whenever needed
this.activeRoute.params.subscribe((param:Params)=>{
  this.user.id= param['id'];
  this.user.name= param['name'];
}
);
  }

  innterComponentEventemit(){
    this.injectService.statusCheck.emit('From DirectiveComponent');
  }
  removeElementFromService(){
    this.injectService.removeFromarray();
  }
  routeToaotherComp(){
    //Activated rote contains the information about route
    //so this route will be oened from the cureent route i.e /directive/assignment
//this.router.navigate(['assignments'],{relativeTo:this.activeRoute});

//this routing can be done with params and fragments programatically
//this.router.navigate(['../directives',1,'shgter'],{queryParams:{id:1,name:'sbefj'},fragment:'yhewuyryh'})
 

this.router.navigate(['assignments'],{queryParams:{id:1,name:'fedtyeh'},fragment:'yeryerhj'});
}

logOut(){
this.authService.logout();
}

logIn(){
  this.authService.login();
}
}
