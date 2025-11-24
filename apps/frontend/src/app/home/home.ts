import { Component, inject, OnInit } from '@angular/core';
import { Button, Card } from '@ecommerce-monorepo/ui';
import { Product } from '../services/product/product';
import { IProduct } from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Button, Card],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  products: IProduct[] = [];
  productService = inject(Product);
  router = inject(Router);

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((products) => {
      console.log(products);
      this.products = products;
    });
  }

  onCardClicked(productDetails: IProduct) {
    this.router.navigateByUrl(`/catalog/${productDetails.id}`);
  }
}
