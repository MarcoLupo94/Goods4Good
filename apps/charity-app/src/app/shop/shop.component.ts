import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Charity, Item } from '@charity-app-production/api-interfaces';
import { CharitiesApiService } from '../utils/charities-api.service';
import { ItemsService } from '../utils/items.service';

@Component({
  selector: 'charity-app-production-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  charity: Charity | undefined;
  id = '';
  items: Item[] = [];

  constructor(
    private route: ActivatedRoute,
    private api: CharitiesApiService,
    private itemService: ItemsService
  ) {}
  loadCharity() {
    this.id = this.route.snapshot.params['id'];
    this.charity = this.api.db.find((item) => item._id === this.id);
  }
  ngOnInit(): void {
    this.loadCharity();
    this.itemService.getShopItems(this.id).subscribe((data) => {
      this.items = [...data];
      console.log(this.items);
    });
  }
}
