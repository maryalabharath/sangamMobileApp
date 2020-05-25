import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnjumandetailsPageRoutingModule } from './anjumandetails-routing.module';

import { AnjumandetailsPage } from './anjumandetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnjumandetailsPageRoutingModule
  ],
  declarations: [AnjumandetailsPage]
})
export class AnjumandetailsPageModule {}
