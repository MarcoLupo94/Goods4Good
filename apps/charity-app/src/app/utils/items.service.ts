import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '@charity-app-production/api-interfaces';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  constructor(
    private http: HttpClient,
    private HttpClientModule: HttpClientModule
  ) {}

  postItem(item: Item): Observable<Item> {
    return this.http.post<Item>(environment.API_DB + 'items', item);
  }
  getShopItems(charityId: string): Observable<Item[]> {
    return this.http.get<Item[]>(
      environment.API_DB + 'items' + '/' + charityId
    );
  }
}
