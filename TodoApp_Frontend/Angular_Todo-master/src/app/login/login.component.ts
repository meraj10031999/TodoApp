import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'Pcs-Global';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;
  // ------ On Valid credentials, we need to route to Welcome page/component -----
  // Router injection
  // Angular.giveMeRouter -> earlier versions of Angular used to access the Router object by using this way
  // Dependency Injection -> a popular and recent inclusion
  // If I would need to add/inject dependency of Router component, we pass the Router component in the constructor
  // as argument - A Router component is imported as an Angular directive
  // Now, we need to inject the service function in the constructor along with the Router, so that the
  // function authenticate() is available in this component to use
  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) { }
  ngOnInit(): void {
    console.log();
  }
  handleLogin() {
    // console.log("Click event on Login.. ", this.username);
    // if (this.username === 'Pcs-Global'  && this.password === 'dummy' ) {
       if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
        // Redirect/Navigate to the Welcome Page - it will get an error as
        // we are passing parameter in the activated route, hence navigate with the parameter
        this.router.navigate(['welcome', this.username])
        this.invalidLogin = false;
    } else {this.invalidLogin = true;}
  }
}

