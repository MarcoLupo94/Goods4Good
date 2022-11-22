import { Component, Input } from '@angular/core';
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
  @Input()
  charity!: Charity;

  navigate() {
    this.router.navigate(['charity-page/', this.charity._id]);
  }
  addCharityToFavorites() {
    const favoriteCharityId = this.charity._id;
    this.user.addToFavorites(favoriteCharityId).subscribe((data) => {
      this.user.currentUser = { ...data };
      console.log(this.user.currentUser, 'updated user');
    });
  }

  ngOnInit(): void {
    // Does this charity id match any in the users favorite charity ids array
    this.user.currentUser.favoriteIds.some((favoriteId) => {
      if (favoriteId === this.charity._id) {
        console.log(this.charity, 'charity is favorited');
        return true;
      } else {
        return false;
      }
    });
  }
}
