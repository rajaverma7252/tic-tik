import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private route: Router) { }

  canActivate(): boolean {
    let login = sessionStorage.getItem('login');
    if (login && login == "true") {
      return true;
    }
    this.route.navigate(['./login']);
    return false;
  }
}
