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
  cartTotal = 0;
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
  setTotalPrice() {
    this.cartTotal = this.cart.reduce(
      (prev, current): number => prev + current.price,
      0
    );
  }
  removeItem(item: Item) {
    this.user.removeItem(item._id)?.subscribe((data) => {
      this.user.currentUser.cart = [...data];
      this.cart = [...data];
    });
  }
  checkOut() {
    this.user.removeAllItem().subscribe((data) => {
      this.user.currentUser.cart = [...data];
      this.cart = [...data];
    });

    this.router.navigate([
      '/charity-page/',
      this.router.url.split('/')[2],
      'thank-you',
    ]);
  }
  ngOnInit(): void {
    this.loadCharity();
    this.user
      .setUser()
      .then((data) => {
        this.cart = [...data];
        this.setTotalPrice();
      })
      .catch((e) => console.log(e));
  }
}
