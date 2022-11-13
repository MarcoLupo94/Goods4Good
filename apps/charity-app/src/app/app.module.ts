import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@charity-app-production/material';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { environment } from '../environments/environment';
import { CharityCardComponent } from './charity-card/charity-card.component';
import { CharityPageComponent } from './charity-page/charity-page.component';
import { DonateClothesComponent } from './donate-clothes/donate-clothes.component';
import { DonateComponent } from './donate/donate.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { ShopComponent } from './shop/shop.component';
import { DonateCashComponent } from './donate-cash/donate-cash.component';
import { DonateCartComponent } from './donate-cart/donate-cart.component';
import { PageNavigationComponent } from './page-navigation/page-navigation.component';
import { FormsModule } from '@angular/forms';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { CartItemComponent } from './cart-item/cart-item.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    CharityCardComponent,
    CharityPageComponent,
    DonateClothesComponent,
    DonateComponent,
    ThankYouComponent,
    ShopComponent,
    DonateCashComponent,
    DonateCartComponent,
    PageNavigationComponent,
    ShopItemComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    MaterialModule,
    AuthModule.forRoot({
      domain: environment.AUTH_DOMAIN,
      clientId: environment.AUTH_CLIENTID,
    }),
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
