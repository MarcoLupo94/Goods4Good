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

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'charity-page/:id',
    component: CharityPageComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'shop', component: ShopComponent },
      {
        path: 'donate',
        component: DonateComponent,
        children: [
          { path: 'cart', component: DonateCartComponent },
          { path: 'cash', component: DonateCashComponent },
        ],
      },
      { path: 'donate-clothes', component: DonateClothesComponent },
      { path: 'thank-you', component: ThankYouComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
