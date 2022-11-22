import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrentUserService } from '../utils/current-user.service';
import { Charity } from '@charity-app-production/api-interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'charity-app-production-charity-card',
  templateUrl: './charity-card.component.html',
  styleUrls: ['./charity-card.component.css']
})
export class CharityCardComponent {
  constructor(private router: Router, private user: CurrentUserService) {}
  charityIsFavorite: boolean = false;

  @Input()
  charity!: Charity;

  @Output()
  favoriteCharitiesChanged = new EventEmitter();

  listenFavCharityChangeEvent() {
    this.favoriteCharitiesChanged.emit(this.user.currentUser.favoriteCharities);
  }

  navigate() {
    this.router.navigate(['charity-page/', this.charity._id]);
  }
  addCharityToFavorites() {
    const favoriteCharity = this.charity;

    if (this.charityIsFavorite) {
      this.user.removeFromFavorites(favoriteCharity).subscribe((data) => {
        console.log(data, 'remove favorite result');
      });

      this.charityIsFavorite = false;

      this.favoriteCharitiesChanged.emit(this.charity._id);
    } else {
      this.user.addToFavorites(favoriteCharity).subscribe((data) => {
        this.user.currentUser = { ...data };
      });
      this.charityIsFavorite = true;
    }
  }

  ngOnInit(): void {
    // Does this charity id match any in the users favorite charity ids array
    if (this.charity) {
      this.user.currentUser.favoriteCharities.some((favoriteCharity) => {
        if (favoriteCharity._id === this.charity._id) {
          this.charityIsFavorite = true;
          return true;
        } else {
          return false;
        }
      });
    }
  }
}
