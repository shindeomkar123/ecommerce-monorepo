import { Component, inject } from '@angular/core';
import { Button } from '@ecommerce-monorepo/ui';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Auth } from '../services/auth/auth';
import { Session } from '../services/session/session';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [Button, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  fb = inject(FormBuilder);
  authService = inject(Auth);
  session = inject(Session);
  router = inject(Router);

  myForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit() {
    if (this.myForm.valid) {
      const email = this.myForm.get('email')?.value;
      const password = this.myForm.get('password')?.value;
      if (email && password) {
        this.authService.loginUser(email, password).subscribe(({ token }) => {
          this.session.setToken(token);
        });
        this.router.navigateByUrl('/catalog');
      }
    }
  }
}
