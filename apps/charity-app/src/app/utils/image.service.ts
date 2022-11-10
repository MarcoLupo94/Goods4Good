import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient) {}

  public uploadImage(image: File) {
    const formData = new FormData();

    formData.append('file', image);
    return this.http.post('http://localhost:3333/api/file', formData);
  }
}
