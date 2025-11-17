import { Component, input, output } from '@angular/core';

@Component({
  selector: 'lib-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  label = input<string>();
  clickEvent = output<any>();

  onClick() {
    this.clickEvent.emit(true);
  }
}
