import { Component, inject, OnInit } from '@angular/core';
import { Button, Card } from '@ecommerce-monorepo/ui';
import { Product } from '../services/product/product';

@Component({
  selector: 'app-home',
  imports: [Button, Card],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(console.log);
  }
  productService = inject(Product);
}
