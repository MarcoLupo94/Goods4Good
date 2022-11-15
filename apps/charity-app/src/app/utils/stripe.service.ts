import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '@charity-app-production/api-interfaces';
import { environment } from '../../environments/environment';
import { loadStripe } from '@stripe/stripe-js';

@Injectable({
  providedIn: 'root',
})
export class StripeService {
  constructor(private http: HttpClient) {}

  cartCheckout(cart: Item[]): void {
    this.http
      .post(environment.API_DB + 'checkout', {
        items: cart,
      })
      .subscribe(async (res: any) => {
        const stripe = await loadStripe(environment.STRIPE_KEY);
        const id = res.session.id;
        console.log(res.session.id);
        stripe?.redirectToCheckout({
          sessionId: id,
        });
      });
  }
}
