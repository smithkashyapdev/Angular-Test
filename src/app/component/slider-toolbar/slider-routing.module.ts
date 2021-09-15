import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SliderPage } from './slider.page';



const routes: Routes = [
  {
    path: '',
    component: SliderPage,
    children: [

      {
        path: '',
        redirectTo:'menu',
        pathMatch: 'full' 
        
      },
      {
        path: 'menu',
        loadChildren: () => import('../sidemenu/sidemenu.module').then( m => m.SidemenuPageModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SliderPageRoutingModule {}
