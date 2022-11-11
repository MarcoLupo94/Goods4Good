import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'charity-app-production-page-navigation',
  templateUrl: './page-navigation.component.html',
  styleUrls: ['./page-navigation.component.css'],
})
export class PageNavigationComponent {
  constructor(private location: Location) {}
  pageName = 'Page Name';

  backClicked() {
    this.location.back();
  }
}
