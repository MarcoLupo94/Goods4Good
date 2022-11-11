import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient) {}

  public uploadImage(image: File) {
    const formData = new FormData();

    formData.append('file', image);
    return this.http.post(environment.API_DB + 'file', formData);
  }
}
