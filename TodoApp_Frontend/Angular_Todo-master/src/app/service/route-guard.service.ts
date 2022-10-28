import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  // dependency injection of the service function
  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private route: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.hardcodedAuthenticationService.isUserLoggedIn()) {
      return true;
    }
    // Need to route the user to Login page before returning true
    this.route.navigate(['login']);
    return false;
  }
}
