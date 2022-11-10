import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { User } from '@charity-app-production/api-interfaces';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  constructor(private auth: AuthService) {
    this.getUser();
  }
  currentUser!: User;
  // TODO get user email , search in database and retrieve , if doesn't exist add to database

  getUser() {
    this.auth.user$.subscribe((userProfile) => {
      console.log(userProfile);
    });
  }
}
