import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Charity, Item } from '@charity-app-production/api-interfaces';
import { CharitiesApiService } from '../utils/charities-api.service';
import { CurrentUserService } from '../utils/current-user.service';
import { ItemsService } from '../utils/items.service';

@Component({
  selector: 'charity-app-production-donate-cart',
  templateUrl: './donate-cart.component.html',
  styleUrls: ['./donate-cart.component.css'],
})
export class DonateCartComponent implements OnInit {
  charity: Charity | undefined;
  id = '';
  cart: Item[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: CharitiesApiService,
    private itemService: ItemsService,
    private user: CurrentUserService
  ) {}

  loadCharity() {
    this.id = this.route.snapshot.params['id'];
    this.charity = this.api.db.find((item) => item._id === this.id);
  }
  setCart(cart: Item[]) {
    this.cart = [...cart];
  }
  ngOnInit(): void {
    this.loadCharity();
    this.user
      .setUser()
      .then((data) => {
        console.log(this.user.currentUser.cart);
        this.cart = [...data];
      })
      .catch((e) => console.log(e));
  }
}
