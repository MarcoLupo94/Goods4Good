import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'charity-app-production-donate-cash',
  templateUrl: './donate-cash.component.html',
  styleUrls: ['./donate-cash.component.css'],
})
export class DonateCashComponent {
  constructor(private router: Router) {}
  value: number | undefined;
  handleSubmit() {
    this.router.navigate(['thank-you']);
  }
  setValue(event: number) {
    this.value = event;
  }
}
