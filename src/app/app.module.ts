import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminHomePageComponent } from './feat/admin/admin-home-page/admin-home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminHomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    AdminHomePageComponent
  ]
})
export class AppModule { }
