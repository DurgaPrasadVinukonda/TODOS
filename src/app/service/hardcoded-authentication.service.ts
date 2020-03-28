import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authenticate(username,password){
    console.log('befor'+this.isUserLogin());
    if(username ==="in28minutes" && password ==="dummy"){
      sessionStorage.setItem('authenticaterUser',username);
      console.log('after'+this.isUserLogin());
      return true;
    }
    return false;
  }
  isUserLogin(){
  let user =sessionStorage.getItem('authenticaterUser');
  return !(user === null);
}
logout(){
  sessionStorage.removeItem('authenticaterUser')

}
}
