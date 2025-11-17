import { Component } from '@angular/core';
import { Button, Card } from '@ecommerce-monorepo/ui';

@Component({
  selector: 'app-home',
  imports: [Button, Card],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
