import { Component, input } from '@angular/core';
interface IProduct {
  title: string;
  description: string;
  price: number;
  currency: string;
  images: string[];
  attribute: string;
  id: string;
}

@Component({
  selector: 'lib-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  product = input<IProduct>();
}
