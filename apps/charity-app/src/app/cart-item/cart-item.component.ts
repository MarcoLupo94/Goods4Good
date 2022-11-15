import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '@charity-app-production/api-interfaces';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'charity-app-production-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  @Input()
  item!: Item;
  @Output() updateCart = new EventEmitter<Item>();
  constructor(public dialog: MatDialog) {}

  handleClick() {
    const dialogRef = this.dialog.open(ConfirmModalComponent);
    dialogRef
      .afterClosed()
      .subscribe((result) => (result ? this.updateCart.emit(this.item) : 1));
  }
}
