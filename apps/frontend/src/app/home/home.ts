import { Component, inject, OnInit } from '@angular/core';
import { Button, Card } from '@ecommerce-monorepo/ui';
import { Product } from '../services/product/product';
import { IProduct } from '../models/product';

@Component({
  selector: 'app-home',
  imports: [Button, Card],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  products: IProduct[] = [];
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }
  productService = inject(Product);
}
