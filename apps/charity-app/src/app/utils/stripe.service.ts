import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Item } from '@charity-app-production/api-interfaces';
import { environment } from '../../environments/environment';
import { loadStripe } from '@stripe/stripe-js';
=======
import { Item } from '@charity-app-production/api-interfaces';
import { environment } from '../../environments/environment';
import { loadStripe } from '@stripe/stripe-js';
>>>>>>> 3f70613 (First commit)

@Injectable({
  providedIn: 'root',
})
export class StripeService {
  constructor(private http: HttpClient) {}

<<<<<<< HEAD
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
        sessionId: res.id,
=======
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
          sessionId: res.id,
        });
      });
  }
}
