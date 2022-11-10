import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Charity } from '@charity-app-production/api-interfaces';
import { Observable } from 'rxjs';
import { CharitiesApiService } from '../utils/charities-api.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'charity-app-production-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  charities: Charity[] = [];
  constructor(private api: CharitiesApiService) {}

  ngOnInit(): any {
    setTimeout(() => {
      this.charities = this.api.db;
      console.log(this.charities);
    }, 50);
  }
}
