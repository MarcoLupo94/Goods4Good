import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Charity } from '@charity-app-production/api-interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { ErrorModalComponent } from '../error-modal/error-modal.component';
@Injectable({
  providedIn: 'root'
})
export class CharitiesApiService {
  db: Charity[] = [];

  constructor(private http: HttpClient, public dialog: MatDialog) {
    this.getData().subscribe(
      (data) => {
        this.db = [...data];
      },
      (error) => {
        this.dialog.open(ErrorModalComponent, {
          data: {
            errorName: error.name,
            errorMessage: error.message,
            errorUrl: error.url,
            errorStatusCode: error.status,
            userMessage: '⛔ Application could not connect to the server ⛔'
          }
        });
      }
    );
  }
  getData(): Observable<Charity[]> {
    return this.http.get<Charity[]>(environment.API_DB + 'charities');
  }
}
