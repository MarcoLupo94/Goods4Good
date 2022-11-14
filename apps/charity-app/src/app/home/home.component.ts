import { Component, OnInit } from '@angular/core';
import { Charity, User } from '@charity-app-production/api-interfaces';
import { CharitiesApiService } from '../utils/charities-api.service';
import { CurrentUserService } from '../utils/current-user.service';

@Component({
  selector: 'charity-app-production-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  charities: Charity[] = [];
  user!: User;
  randomizedCharities: Charity[] = [];

  constructor(
    private api: CharitiesApiService,
    private userService: CurrentUserService
  ) {}

  ngOnInit(): any {
    this.userService
      .setUser()
      .then(() => {
        this.charities = [...this.api.db].sort(() => 0.5 - Math.random());
        this.user = this.userService.currentUser;
        console.log(this.user);
      })
      .catch((e) => console.log(e));
  }
}
