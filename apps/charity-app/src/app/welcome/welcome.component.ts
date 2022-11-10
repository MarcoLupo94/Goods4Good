import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'charity-app-production-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) public document: Document
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
