import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Item, User, Charity } from '@charity-app-production/api-interfaces';
import { lastValueFrom, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  constructor(private auth: AuthService, private http: HttpClient) {
    this.getUserFromAuth0();
  }
  currentUser: User = {
    _id: '',
    email: '',
    username: '',
    family_name: '',
    given_name: '',
    picture: '',
    cart: [],
    donations: [],
    favoriteCharities: []
  };
  user: any;

  getUserFromAuth0() {
    this.auth.user$.subscribe((userProfile) => {
      this.user = userProfile;
      this.currentUser = { ...this.user };
      this.currentUser.username = this.user.nickname;
    });
  }
  postUserToDatabase(): Observable<User> {
    return this.http.post<User>(environment.API_DB + 'users', this.currentUser);
  }
  async setUser() {
    const user = await lastValueFrom(this.postUserToDatabase());
    this.currentUser = { ...user };
    const cart = await lastValueFrom(this.getCart());
    return cart
      ? (this.currentUser.cart = [...cart])
      : (this.currentUser.cart = []);
  }

  // add/Remove Items to cart
  getCart(): Observable<Item[]> {
    return this.http.get<Item[]>(
      environment.API_DB + 'users/' + this.currentUser._id
    );
  }
  addItem(item: Item): Observable<Item[]> | undefined {
    if (!this.currentUser.cart.find((el) => el._id === item._id))
      return this.http.patch<Item[]>(
        environment.API_DB + 'users/' + this.currentUser._id,
        item
      );
    return undefined;
  }
  removeItem(itemId: string): Observable<Item[]> {
    return this.http.patch<Item[]>(
      environment.API_DB + 'users/remove/' + this.currentUser._id,
      { itemId }
    );
  }
  removeAllItem(): Observable<Item[]> {
    this.currentUser.cart = [];
    return this.http.delete<Item[]>(
      environment.API_DB + 'users/' + this.currentUser._id
    );
  }

  // Add charity to favorites
  addToFavorites(favoriteCharity: Charity): Observable<User> {
    return this.http.post<User>(environment.API_DB + 'users/' + 'favorites', {
      userId: this.currentUser._id,
      charityId: favoriteCharity._id,
      charity: favoriteCharity
    });
  }

  // Remove charity from favorites
  removeFromFavorites(unfavoriteCharity: Charity): Observable<Charity[]> {
    return this.http.patch<Charity[]>(
      environment.API_DB +
        'users/' +
        'remove-favorite/' +
        unfavoriteCharity._id,
      {
        userId: this.currentUser._id,
        charityId: unfavoriteCharity._id,
        charity: unfavoriteCharity
      }
    );
  }
}
