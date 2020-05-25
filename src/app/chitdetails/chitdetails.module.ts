import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChitdetailsPageRoutingModule } from './chitdetails-routing.module';

import { ChitdetailsPage } from './chitdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChitdetailsPageRoutingModule
  ],
  declarations: [ChitdetailsPage]
})
export class ChitdetailsPageModule {}
