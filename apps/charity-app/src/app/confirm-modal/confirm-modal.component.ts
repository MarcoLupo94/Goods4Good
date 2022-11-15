import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'charity-app-production-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css'],
})
export class ConfirmModalComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmModalComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
