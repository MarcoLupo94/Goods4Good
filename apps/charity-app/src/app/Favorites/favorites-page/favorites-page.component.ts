import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../../utils/current-user.service';
import {
  User,
  Favorite,
  Charity
} from '@charity-app-production/api-interfaces';

@Component({
  selector: 'charity-app-production-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {
  constructor(private user: CurrentUserService) {}

  favoriteCharities: Charity[] = [];

  ngOnInit(): void {
    this.favoriteCharities = this.user.currentUser.favoriteCharities;
  }
}
