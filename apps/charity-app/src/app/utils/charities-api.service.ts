import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Charity } from '@charity-app-production/api-interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CharitiesApiService {
  db: Charity[] = [];

  constructor(private http: HttpClient) {
    this.getData().subscribe((data) => {
      this.db = [...data];
    });
  }
  getData(): Observable<Charity[]> {
    return this.http.get<Charity[]>(environment.API_DB + 'charities');
  }

  // async getDataAndPost() {
  //   try {
  //     const data = this.http.get<Charity[]>('/assets/fakeDB.json');
  //     const promiseData = await firstValueFrom(data);
  //     const post = this.http.post<Charity[]>(
  //       environment.API_DB + 'charities',
  //       promiseData
  //     );
  //     const dbData = await firstValueFrom(post);
  //     this.db = [...dbData];
  //     console.log(this.db);
  //   } catch (e) {
  //     console.log(e);
  //   }
  //
}
