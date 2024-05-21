import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    
    // Simulate authentication check
    const isAuthenticated = true;

    if (isAuthenticated) {
      // User is authenticated, allow navigation
      return of(true);
    } else {
      // User is not authenticated, redirect to login page or any other route
      this.router.navigate(['unauthorised']); // Redirect to login page
      return of(false);
    }
  }
}
