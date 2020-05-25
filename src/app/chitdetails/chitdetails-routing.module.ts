import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChitdetailsPage } from './chitdetails.page';

const routes: Routes = [
  {
    path: '',
    component: ChitdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChitdetailsPageRoutingModule {}
