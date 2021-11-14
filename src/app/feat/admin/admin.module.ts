import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';

import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AdminHomePageComponent],
  imports: [CommonModule, AdminRoutingModule, MatButtonModule],
  exports: [AdminHomePageComponent],
})
export class AdminModule {}
