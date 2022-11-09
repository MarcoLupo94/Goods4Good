import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'charity-app-production-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
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
  ngOnInit(): void {}
}
