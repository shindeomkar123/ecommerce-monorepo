import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  http = inject(HttpClient);

  loginUser(email: string, password: string): Observable<any> {
    const payload = { email, password };
    return this.http.post('/api/v1/auth/login', payload);
  }
}
