import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CharitiesApiService {
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get(environment.API_URL);
  }
}
