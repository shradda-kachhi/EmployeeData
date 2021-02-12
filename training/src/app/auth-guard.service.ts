import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { DummyAuthenticator } from "./dummy-authenticator.service";
@Injectable()
export class AuthGuard implements CanActivateChild{
    //this protects the route to confirm it process some logic before the route gets active
    //like we need to see somepages taht is possible only if we are logged in otherwise it
    //sends you to some other page
constructor(private dummy:DummyAuthenticator,private route:Router){}
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
     //since we are only applyibg the same for the child 
     //use child actiavte indirectives
     //that will authenticate only going inside child
       return this.canActivate(childRoute,state);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    boolean | Observable<boolean>  | Promise<boolean> 
     {
  return  this.dummy.isAuthenticated().then(
      ( auth:boolean)=>{
          if(auth)
        {
            return true;//if true is returnsed from here than only the [artcular route is accessible]
         
        }  
        else{
          //  if false is retured than go to the home
            this.route.navigate(['/']);
        }
          
      }
   );
    }
    canAc
    
}