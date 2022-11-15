import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SpinnerComponent } from '../spinner/spinner.component';
import { StripeService } from '../utils/stripe.service';

@Component({
  selector: 'charity-app-production-donate-cash',
  templateUrl: './donate-cash.component.html',
  styleUrls: ['./donate-cash.component.css'],
})
export class DonateCashComponent {
  constructor(public dialog: MatDialog, private stripe: StripeService) {}
  value!: number;
  handleSubmit() {
    const dialogRef = this.dialog.open(SpinnerComponent);
    this.stripe.cashCheckout(this.value);
  }
  setValue(event: number) {
    this.value = event;
  }
}
