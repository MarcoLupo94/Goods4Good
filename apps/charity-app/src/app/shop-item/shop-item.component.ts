import { Component, Input, OnInit } from '@angular/core';
import { Charity, Item } from '@charity-app-production/api-interfaces';

@Component({
  selector: 'charity-app-production-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css'],
})
export class ShopItemComponent implements OnInit {
  @Input()
  item!: Item;
  @Input()
  charity!: Charity;

  constructor() {}
  ngOnInit(): void {}
}
