import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';

import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HomeRoutingModule, MatButtonModule],
  exports: [HomePageComponent],
})
export class HomeModule {}
