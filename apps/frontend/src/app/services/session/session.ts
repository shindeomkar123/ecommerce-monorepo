import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Session {
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
