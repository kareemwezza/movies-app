import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

import { OffersComponent } from './offers.component';

@NgModule({
  declarations: [OffersComponent],
  imports: [CommonModule, ButtonModule],
  exports: [OffersComponent],
})
export class OffersModule {}
