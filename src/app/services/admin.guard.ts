import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  canActivate() {
    const userType = window.localStorage.getItem('user_type');

    if (userType !== 'admin') {
      this.router.navigate(['/']);
    }

    return userType === 'admin';
  }

  constructor(private router: Router) { }
}
