import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnjumandetailsPage } from './anjumandetails.page';

const routes: Routes = [
  {
    path: '',
    component: AnjumandetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnjumandetailsPageRoutingModule {}
