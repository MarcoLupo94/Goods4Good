import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Item } from '@charity-app-production/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'charity-app-production-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  @Input()
  cart!: Item[];
  isLoggedIn$!: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    public auth: AuthService,
    @Inject(DOCUMENT) public document: Document
  ) {}
  logout() {
    this.auth.logout({
      returnTo: this.document.location.origin,
    });
  }
  ngOnInit() {
    this.isLoggedIn$ = this.auth.isAuthenticated$;
  }
}
