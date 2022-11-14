import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Item } from '@charity-app-production/api-interfaces';
import { Observable } from 'rxjs';
import { CurrentUserService } from '../utils/current-user.service';

@Component({
  selector: 'charity-app-production-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  @Input()
  cart: Item[] | undefined;
  isLoggedIn$!: Observable<boolean>;

  constructor(
    private user: CurrentUserService,
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
    this.user
      .setUser()
      .then((data) => {
        this.cart = [...data];
        console.log(this.cart);
      })
      .catch((e) => console.log(e));
  }
}
