import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from '@ecommerce-monorepo/ui';
import { CartService } from './cart.service';
import { map, Observable } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { IProduct } from '../models/product';

@Component({
  selector: 'app-cart',
  imports: [Button, AsyncPipe, JsonPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart implements OnInit {
  cartList$!: Observable<any>;

  ngOnInit(): void {
    this.cartList$ = this.cartService
      .getCartItem()
      .pipe(map((res) => Array.from(res.values())));
    this.cartList$.subscribe(console.log);
  }

  router = inject(Router);
  cartService = inject(CartService);

  goToCatalog() {
    this.router.navigateByUrl('/catalog');
  }

  addItems(product: IProduct) {
    this.cartService.addToCart(product);
  }

  removeItems(product: IProduct) {
    this.cartService.removeFromCart(product);
  }
}
