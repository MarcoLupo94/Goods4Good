import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@charity-app-production/api-interfaces';
import { CharitiesApiService } from './utils/charities-api.service';

@Component({
  selector: 'charity-app-production-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient, private api: CharitiesApiService) {}

  ngOnInit() {}
}
