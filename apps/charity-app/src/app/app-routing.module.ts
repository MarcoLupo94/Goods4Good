import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './utils/auth.guard';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CharityPageComponent } from './charity-page/charity-page.component';
import { ShopComponent } from './shop/shop.component';
import { DonateComponent } from './donate/donate.component';
import { DonateCartComponent } from './donate-cart/donate-cart.component';
import { DonateCashComponent } from './donate-cash/donate-cash.component';
import { DonateClothesComponent } from './donate-clothes/donate-clothes.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { FavoritesPageComponent } from './Favorites/favorites-page/favorites-page.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: DonateCartComponent, canActivate: [AuthGuard] },
  { path: 'search', component: SearchPageComponent, canActivate: [AuthGuard] },

  {
    path: 'charity-page',
    canActivate: [AuthGuard],
    children: [
      { path: ':id', component: CharityPageComponent },
      { path: ':id/shop', component: ShopComponent },
      {
        path: ':id/donate',
        component: DonateComponent,
        children: [
          { path: 'cart', component: DonateCartComponent, outlet: 'secondary' },
          { path: 'cash', component: DonateCashComponent, outlet: 'secondary' }
        ]
      },
      { path: ':id/donate-clothes', component: DonateClothesComponent }
    ]
  },
  { path: 'favorites', component: FavoritesPageComponent },
  { path: 'thank-you', component: ThankYouComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
