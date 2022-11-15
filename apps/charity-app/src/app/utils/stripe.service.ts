import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StripeService {
  constructor(private http: HttpClient) {}

  checkout(items: Item[]): void {
    this.http
      .post(environment.API_DB, items + '/checkout')
      .subscribe(async (res: any) => {
        const stripe = await loadStripe(environment.STRIPE_KEY);
        stripe?.redirectToCheckout({
          sessionId: res._id,
        });
      });
  }
}
