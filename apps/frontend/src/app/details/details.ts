import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product } from '../services/product/product';
import { IProduct } from '../models/product';
import { CommonModule } from '@angular/common';
import { Button } from '@ecommerce-monorepo/ui';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-details',
  imports: [CommonModule, Button],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details implements OnInit {
  product!: IProduct;
  routerSnap = inject(ActivatedRoute);
  router = inject(Router);
  productService = inject(Product);
  cartService = inject(CartService);

  ngOnInit(): void {
    this.routerSnap.params
      .pipe(switchMap(({ id }) => this.productService.getProductDetail(id)))
      .subscribe((res) => (this.product = res));
  }

  addToCart() {
    this.cartService.addToCart(this.product);
    this.router.navigateByUrl('/cart');
  }

  goToCatalog() {
    this.router.navigateByUrl('/catalog');
  }
}
