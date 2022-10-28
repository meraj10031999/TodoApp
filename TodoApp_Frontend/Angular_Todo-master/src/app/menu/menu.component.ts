import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // isUserLoggedIn: boolean = false;
  // Inject the HardcodedAuthenticatedUser service
  constructor(public hardcodedAuthenticationService: HardcodedAuthenticationService) { }
  ngOnInit(): void {
    console.log();
    // this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
  }
}
