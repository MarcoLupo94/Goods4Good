import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Charity, Item } from '@charity-app-production/api-interfaces';

@Component({
  selector: 'charity-app-production-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input()
  item!: Item;
  @Output() updateCart = new EventEmitter<Item[]>();
  constructor() {}
  handleClick() {}

  ngOnInit(): void {}
}
