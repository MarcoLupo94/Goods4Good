import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrentUserService } from '../utils/current-user.service';
import { Charity } from '@charity-app-production/api-interfaces';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ErrorModalComponent } from '../error-modal/error-modal.component';

@Component({
  selector: 'charity-app-production-charity-card',
  templateUrl: './charity-card.component.html',
  styleUrls: ['./charity-card.component.css']
})
export class CharityCardComponent {
  constructor(
    private router: Router,
    private user: CurrentUserService,
    public dialog: MatDialog
  ) {}
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
      this.user.removeFromFavorites(favoriteCharity).subscribe(
        (data) => {
          this.charityIsFavorite = false;
          this.listenFavCharityChangeEvent();
        },
        (error) => {
          this.dialog.open(ErrorModalComponent, {
            data: {
              errorName: error.name,
              errorMessage: error.message,
              errorUrl: error.url,
              errorStatusCode: error.status,
              userMessage: `⚠️ Charity was not removed from your favorites ⚠️`
            }
          });
        }
      );
    } else {
      this.user.addToFavorites(favoriteCharity).subscribe(
        (data) => {
          this.user.currentUser = { ...data };
          this.charityIsFavorite = true;
          this.listenFavCharityChangeEvent();
        },
        (error) => {
          this.dialog.open(ErrorModalComponent, {
            data: {
              errorName: error.name,
              errorMessage: error.message,
              errorUrl: error.url,
              errorStatusCode: error.status,
              userMessage: `⚠️ Charity was not added to your favorites ⚠️`
            }
          });
        }
      );
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
