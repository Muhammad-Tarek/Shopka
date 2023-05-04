import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  tokenKey: string = '$Shopka$token';

  constructor() {}

  setToken() {
    localStorage.setItem(this.tokenKey, '1111111111111111111111'); // Dummy Token
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  get isAuthenticated() {
    return !!localStorage.getItem(this.tokenKey);
  }

  signOut() {
    localStorage.removeItem(this.tokenKey);
  }
}
