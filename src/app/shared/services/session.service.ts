import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  isLoggedIn: boolean = false;

  constructor(private router: Router) {}

  doLogin(): Promise<boolean> {
    return new Promise((resolve) => {
      this.isLoggedIn = false;
      setTimeout(() => {
        this.isLoggedIn = true;
        resolve(true);
      }, 2000);
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
