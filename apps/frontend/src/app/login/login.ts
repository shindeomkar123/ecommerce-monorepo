import { Component, inject } from '@angular/core';
import { Button } from '@ecommerce-monorepo/ui';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [Button, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  fb = inject(FormBuilder);

  myForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit() {
    if (this.myForm.valid) {
      const email = this.myForm.get('email');
      const password = this.myForm.get('password');
      console.log(email, password);
    }
  }
}
