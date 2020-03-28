import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HardcodedAuthenticationService} from './../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='Prasad';
  password='admin';
  errorMessage='Invalid Credentials';
  invalidLogin=false;
  
// We need to add dependency injection in constructor
  constructor(private router:Router, private hardcodedAuthenticationService:HardcodedAuthenticationService)
     { }

  ngOnInit() {
  }
  handleLogin(){
    // if(this.username === 'prasad' && this.password ==='mla'){
      if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      //Redirecting to welcome page
      this.router.navigate(['welcome',this.username]);
      this.invalidLogin=false;
    }else {
      this.invalidLogin=true;
    }
  }
}
