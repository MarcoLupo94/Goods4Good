import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@charity-app-production/api-interfaces';

@Component({
  selector: 'charity-app-production-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  hello$ = this.http.get<User>('/api/hello');
  constructor(private http: HttpClient) {}

  ngOnInit() {
    return this.http
      .get<User>('/api/users')
      .subscribe((users) => console.log(users));
  }
}
