import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Charity, User } from '@charity-app-production/api-interfaces';
import { CharitiesApiService } from '../utils/charities-api.service';
import { CurrentUserService } from '../utils/current-user.service';
@Component({
  selector: 'charity-app-production-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit {
  charities: Charity[] = [];
  currentSearch: Charity[] = [];
  user!: User;
  options: string[] = [];
  formValue = '';
  formDisabled = true;

  constructor(
    private api: CharitiesApiService,
    private userService: CurrentUserService,
    private router: Router
  ) {}
  checkValidity(event: string) {
    this.currentSearch = this.charities.filter((charity) => {
      if (event === '') return this.charities;
      return charity.name.toLowerCase().includes(event.toLowerCase());
    });
  }
  ngOnInit(): void {
    this.userService
      .setUser()
      .then(() => {
        this.charities = this.currentSearch = [...this.api.db].sort(
          () => 0.5 - Math.random()
        );
        this.options = this.charities.map((el) => el.name).sort();
        this.user = this.userService.currentUser;
      })
      .catch((e) => console.log(e));
  }
}
