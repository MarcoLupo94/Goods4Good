import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Charity } from '@charity-app-production/api-interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CharitiesApiService {
  db: Charity[] = [];

  constructor(private http: HttpClient) {
    this.getData().subscribe(
      (data) => {
        this.db = [...data];
      },
      (error) => {
        const errorInfo = {
          errorName: error.name,
          errorMessage: error.message,
          errorUrl: error.url,
          userMessage: `⛔ Application could not connect to the server ⛔`
        };
        console.log(errorInfo, 'error event (charities service)');
        // Emit this info when the error event occurs
      }
    );
  }
  getData(): Observable<Charity[]> {
    return this.http.get<Charity[]>(environment.API_DB + 'charities');
  }
}
