import { Component, input, output } from '@angular/core';
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
  product = input.required<IProduct>();
  clickEvent = output<IProduct>();

  onCardClick() {
    this.clickEvent.emit(this.product());
  }
}
