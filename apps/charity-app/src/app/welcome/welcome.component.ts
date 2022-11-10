import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CharitiesApiService } from '../utils/charities-api.service';

@Component({
  selector: 'charity-app-production-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) public document: Document,
    private api: CharitiesApiService
  ) {}

  login() {
    this.auth.loginWithRedirect({
      appState: { target: '/home' },
    });
  }
  logout() {
    this.auth.logout({
      returnTo: this.document.location.origin,
    });
  }
}
