import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'charity-app-production-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) public document: Document
  ) {}

  login() {
    this.auth.loginWithRedirect();
  }
  logout() {
    this.auth.logout({
      returnTo: this.document.location.origin,
    });
  }
}
