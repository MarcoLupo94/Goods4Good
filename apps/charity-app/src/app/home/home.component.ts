import { Component, OnInit } from '@angular/core';
import { CharitiesApiService } from '../utils/charities-api.service';

@Component({
  selector: 'charity-app-production-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private api: CharitiesApiService) {}

  ngOnInit(): void {
    // this.api.getData().subscribe((data) => console.log(data));
  }
}
