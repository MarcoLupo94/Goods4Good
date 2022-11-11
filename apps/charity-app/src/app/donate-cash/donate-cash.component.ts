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
    console.log(this.router.url.split('/')[2]);
    this.router.navigate([
      '/charity-page/',
      this.router.url.split('/')[2],
      'thank-you',
    ]);
  }
  setValue(event: number) {
    this.value = event;
  }
}
