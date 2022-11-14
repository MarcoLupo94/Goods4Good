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
  photo =
    'https://res.cloudinary.com/everydotorg/image/upload/f_auto,c_limit,w_3840,q_80/profile_pics/psplpmozwp59ptutdprz';

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
      })
      .catch((e) => console.log(e));
  }
}
