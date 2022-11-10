import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  constructor(private auth: AuthService) {}
}
