import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage
    // children:[
    //   {
    //     path:'',
    //     redirectTo:'/menu/landingpage',
    //     pathMatch:'full'

    //   },
    //   {
    //       path: 'chitdetails',
    //       loadChildren: () => import('../chitdetails/chitdetails.module').then( m => m.ChitdetailsPageModule)
    //     },
    //     {
    //       path: 'anjumandetails',
    //       loadChildren: () => import('../anjumandetails/anjumandetails.module').then( m => m.AnjumandetailsPageModule)
    //     },
        
    //       {
    //         path: 'landingpage',
    //         loadChildren: () => import('../landingpage/landingpage.module').then( m => m.LandingpagePageModule)
    //       },
        
        
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
