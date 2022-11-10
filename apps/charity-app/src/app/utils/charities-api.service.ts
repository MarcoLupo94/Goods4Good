import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Charity } from '@charity-app-production/api-interfaces';
import { firstValueFrom, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CharitiesApiService {
  db: Charity[] = [];

  constructor(private http: HttpClient) {
    this.getDataAndPost();
  }

  async getDataAndPost() {
    try {
      const data = this.http.get<Charity[]>('/assets/fakeDB.json');
      const promiseData = await firstValueFrom(data);
      const post = this.http.post<Charity[]>(
        environment.API_DB + 'charities',
        promiseData
      );
      const dbData = await firstValueFrom(post);
      this.db = [...dbData];
      console.log(this.db);
    } catch (e) {
      console.log(e);
    }
  }
}
