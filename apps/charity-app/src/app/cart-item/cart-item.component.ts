import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '@charity-app-production/api-interfaces';

@Component({
  selector: 'charity-app-production-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  @Input()
  item!: Item;
  @Output() updateCart = new EventEmitter<Item>();
  handleClick() {
    this.updateCart.emit(this.item);
  }
}
