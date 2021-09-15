import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

import { SidemenuPage } from './sidemenu.page';
import { CartPage } from '../cart/cart.page';
import { ProductlistPage } from '../productlist/productlist.page';
import { CartStatusPage } from '../cart-status/cart-status.page';
import { SliderPage } from '../slider-toolbar/slider.page';

const routes: Routes = [
  {
    path: '',
    component: SidemenuPage,
    children: [

      {
        path: '',
        redirectTo:'category/1',
        pathMatch: 'full' 
        
      },
      {
        path: 'category/:id',
        loadChildren: () => import('../productlist/productlist.module')
        .then( m => m.ProductlistPageModule)
      },
  
      {
         path: 'cartProducts',
         loadChildren: () => import('../cart/cart.module')
        .then( m => m.CartPageModule)
      }
      ,
     {
      path: 'productdetail/:id',
      loadChildren: () => import('../product/product.module').then( m => m.ProductPageModule)
    }
    ],

    
}
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SidemenuPage,SliderPage]
})
export class SidemenuPageModule {}
