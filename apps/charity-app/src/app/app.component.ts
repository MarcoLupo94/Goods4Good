import { Component, OnInit } from '@angular/core';
import { CharitiesApiService } from './utils/charities-api.service';

@Component({
  selector: 'charity-app-production-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private api: CharitiesApiService) {}

  ngOnInit() {}
}
