import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ErrorInfo } from '@charity-app-production/api-interfaces';

@Component({
  selector: 'charity-app-production-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.css']
})
export class ErrorModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ErrorModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ErrorInfo
  ) {}

  errorExplanationMessage = '';

  formatErrorExplanationMessages() {
    if (this.data.errorStatusCode === 0) {
      this.errorExplanationMessage =
        'There is a problem with your internet connection or connecting to the server';
    }
    if (this.data.errorStatusCode === 404) {
      this.errorExplanationMessage = 'Our servers could not find that page';
    }
  }

  ngOnInit(): void {
    this.formatErrorExplanationMessages();
  }
}
