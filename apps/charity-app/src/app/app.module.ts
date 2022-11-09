import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@charity-app-production/material';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { AuthModule } from '@auth0/auth0-angular';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    RoutingModule,
    MaterialModule,
    AuthModule.forRoot({
      domain: 'dev-68ahu83dvdkogdco.us.auth0.com',
      clientId: 'xfZBZvzfQHY6Zue2FMJKvGLiDRVqomf3',
      // TODO store this in env file
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
