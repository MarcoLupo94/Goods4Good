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

  favCharityChangeEvent(event: any) {
    const filteredFavCharities = this.favoriteCharities.filter(
      (favoriteCharity) => {
        if (favoriteCharity._id !== event) {
          return favoriteCharity;
        } else {
          return false;
        }
      }
    );
    this.favoriteCharities = filteredFavCharities;
  }

  ngOnInit(): void {
    this.favoriteCharities = this.user.currentUser.favoriteCharities;
  }
}
