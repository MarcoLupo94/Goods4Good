import { Component, Input } from '@angular/core';
import { Charity } from '@charity-app-production/api-interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'charity-app-production-charity-card',
  templateUrl: './charity-card.component.html',
  styleUrls: ['./charity-card.component.css'],
})
export class CharityCardComponent {
  constructor(private router: Router) {}
  @Input()
  charity!: Charity;

  navigate() {
    this.router.navigate(['charity-page/', this.charity._id]);
  }
}
