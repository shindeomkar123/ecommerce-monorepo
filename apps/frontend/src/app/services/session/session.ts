import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Session {
  token = signal<string | null>(this.getToken());

  setToken(token: string) {
    localStorage.setItem('token', token);
    this.token.set(token);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
