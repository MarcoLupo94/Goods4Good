import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Charity, Item } from '@charity-app-production/api-interfaces';
import { CurrentUserService } from '../utils/current-user.service';

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
  @Output() updateCart = new EventEmitter<Item[]>();

  itemInCart = false;
  constructor(private user: CurrentUserService) {}

  handleClick() {
    // ADD OR REMOVE ITEM
    if (!this.itemInCart) {
      this.user.addItem(this.item)?.subscribe((data) => {
        this.user.currentUser.cart = [...data];
        this.updateCart.emit(this.user.currentUser.cart);
        this.itemInCart = !this.itemInCart;
      });
    } else {
      this.user.removeItem(this.item._id)?.subscribe((data) => {
        this.user.currentUser.cart = [...data];
        this.updateCart.emit(this.user.currentUser.cart);
        this.itemInCart = !this.itemInCart;
      });
    }
  }
  ngOnInit(): void {
    if (this.user.currentUser.cart.find((el) => el._id === this.item._id))
      this.itemInCart = true;
  }
}
