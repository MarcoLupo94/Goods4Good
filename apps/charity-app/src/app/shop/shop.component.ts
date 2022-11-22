import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Charity, Item } from '@charity-app-production/api-interfaces';
import { CharitiesApiService } from '../utils/charities-api.service';
import { CurrentUserService } from '../utils/current-user.service';
import { ItemsService } from '../utils/items.service';

@Component({
  selector: 'charity-app-production-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  charity: Charity | undefined;
  id = '';
  items: Item[] = [];
  cart: Item[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: CharitiesApiService,
    private itemService: ItemsService,
    private user: CurrentUserService
  ) {}
  navigate() {
    this.router.navigateByUrl(
      `charity-page/${this.id}/donate/(secondary:cart)`
    );
  }
  loadCharity() {
    this.id = this.route.snapshot.params['id'];
    this.charity = this.api.db.find((item) => item._id === this.id);
  }
  setCart(cart: Item[]) {
    this.cart = [...cart];
  }
  ngOnInit(): void {
    this.user
      .setUser()
      .then((data) => {
        this.cart = [...data];
      })
      .catch((e) => console.log(e));
    this.loadCharity();
    this.itemService.getShopItems(this.id).subscribe((data) => {
      this.items = [...data];
    });
  }
}
