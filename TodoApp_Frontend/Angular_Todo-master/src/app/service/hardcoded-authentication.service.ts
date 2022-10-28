import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  constructor() { }
  authenticate(username: any, password: any) {
    console.log("Before logging: "+ this.isUserLoggedIn());  // remove the session storage data & check the inspect console
    if (username === 'Pcs-Global'  && password === 'dummy' ) {
      // Use a session storage mechanism to store the authentication result
      sessionStorage.setItem("AuthenticatedUser", username);
      console.log("After logging: "+ this.isUserLoggedIn()); // check the inspect console
      return true
    }
      return false;
  }
  logout() {
    sessionStorage.removeItem("AuthenticatedUser");
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("AuthenticatedUser");
    return !(user === null);
  }
}
