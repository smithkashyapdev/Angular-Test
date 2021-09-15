import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductlistPage } from '../productlist/productlist.page';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SidemenuPage } from './sidemenu.page';



const routes: Routes = [
  {
    path: 'menu',
    component: SidemenuPage,
    children: [
      {
        path: 'productlist',
        loadChildren: () => import('../productlist/productlist.module')
        .then( m => m.ProductlistPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menu/'
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidemenuPageRoutingModule {}
