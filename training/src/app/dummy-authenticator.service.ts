import { promise } from "protractor";

export class DummyAuthenticator{
   
   loggedIn :boolean=false;
    isAuthenticated(){
        const promise = new Promise(
            (resolve,reject)=>{
                setTimeout(()=>resolve(this.loggedIn),100)
                //this is returned after 100 seconds so, we will navigate to /basics after 100 msec
            }
        );
        return promise;
    }
    //We can simply put two buttons and login logout so acordingly our component would be visible
    login(){
       this.loggedIn=true;
    }
    logout(){
        this.loggedIn=false;
     }
}