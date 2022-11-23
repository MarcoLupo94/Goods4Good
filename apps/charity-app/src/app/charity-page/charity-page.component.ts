import { APP_ID, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Charity } from '@charity-app-production/api-interfaces';
import { CharitiesApiService } from '../utils/charities-api.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'charity-app-production-charity-page',
  templateUrl: './charity-page.component.html',
  styleUrls: ['./charity-page.component.css']
})
export class CharityPageComponent implements OnInit {
  charity: Charity | undefined;
  id: string | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: CharitiesApiService
  ) {}

  navigate(adress: string) {
    this.router.navigate(['charity-page', this.id, adress]);
  }
  navigateSecondary(adress: string) {
    this.router.navigateByUrl(
      `charity-page/${this.id}/donate/(secondary:${adress})`
    );
  }
  loadCharity() {
    this.id = this.route.snapshot.params['id'];
    this.charity = this.api.db.find((item) => item._id === this.id);
  }
  ngOnInit(): void {
    this.loadCharity();
  }
}
