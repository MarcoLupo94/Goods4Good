import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'charity-app-production-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css'],
})
export class ThankYouComponent {
  constructor(private router: Router) {}
  navigate() {
    this.router.navigate(['home']);
  }
}
