import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChitpaymentdetailsPageRoutingModule } from './chitpaymentdetails-routing.module';

import { ChitpaymentdetailsPage } from './chitpaymentdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChitpaymentdetailsPageRoutingModule
  ],
  declarations: [ChitpaymentdetailsPage]
})
export class ChitpaymentdetailsPageModule {}
