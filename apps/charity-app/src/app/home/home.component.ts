import { Component, OnInit } from '@angular/core';
import { Charity } from '@charity-app-production/api-interfaces';
import { CharitiesApiService } from '../utils/charities-api.service';
import { CurrentUserService } from '../utils/current-user.service';

@Component({
  selector: 'charity-app-production-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  charities: Charity[] = [];
  constructor(
    private api: CharitiesApiService,
    private currentUser: CurrentUserService
  ) {}

  ngOnInit(): any {
    this.currentUser.setUser();
    setTimeout(() => {
      this.charities = this.api.db;
      console.log(this.charities);
    }, 50);
  }
}
