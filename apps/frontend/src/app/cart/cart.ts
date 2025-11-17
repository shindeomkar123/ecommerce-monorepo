import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from '@ecommerce-monorepo/ui';

@Component({
  selector: 'app-cart',
  imports: [Button],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  router = inject(Router);
  goToCatalog() {
    this.router.navigateByUrl('/catalog');
  }
}
