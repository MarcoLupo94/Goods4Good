import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'charity-app-production-page-navigation',
  templateUrl: './page-navigation.component.html',
  styleUrls: ['./page-navigation.component.css'],
})
export class PageNavigationComponent {
  constructor(private location: Location) {}
  @Input()
  pageName!: string;

  backClicked() {
    this.location.back();
  }
}
