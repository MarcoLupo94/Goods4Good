import { APP_ID, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Charity } from '@charity-app-production/api-interfaces';
import { CharitiesApiService } from '../utils/charities-api.service';

@Component({
  selector: 'charity-app-production-charity-page',
  templateUrl: './charity-page.component.html',
  styleUrls: ['./charity-page.component.css'],
})
export class CharityPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private api: CharitiesApiService
  ) {}
  charity: Charity | undefined;
  ngOnInit(): void {
    const id: string = this.route.snapshot.params['id'];
    console.log(id);
    this.charity = this.api.db.find((item) => item._id === id);
    console.log(this.charity);
  }
}
