import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Item, User } from '@charity-app-production/api-interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  constructor(private auth: AuthService, private http: HttpClient) {
    this.getUserFromAuth0();
  }
  currentUser: User = {
    _id: '',
    email: '',
    username: '',
    cart: [],
    donations: [],
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
  setUser() {
    this.postUserToDatabase().subscribe(
      (user) => (this.currentUser = { ...user })
    );
  }

  // TODO NEED TO CONNECT TO DATABASE and add Items to cart
  addItem(item: Item): Observable<User> {
    return this.http.patch<User>(environment.API_DB + 'users', item);
  }
  removeItem(itemId: string): Observable<User> {
    return this.http.patch<User>(environment.API_DB + 'users', itemId);
  }
  removeAllItem(): Observable<User> {
    return this.http.patch<User>(environment.API_DB + 'users', 'all');
  }
}
