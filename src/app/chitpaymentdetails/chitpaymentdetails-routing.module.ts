import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChitpaymentdetailsPage } from './chitpaymentdetails.page';

const routes: Routes = [
  {
    path: '',
    component: ChitpaymentdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChitpaymentdetailsPageRoutingModule {}
