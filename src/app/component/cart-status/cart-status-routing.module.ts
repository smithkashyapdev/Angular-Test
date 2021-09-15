import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartStatusPage } from './cart-status.page';

const routes: Routes = [
  {
    path: '',
    component: CartStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartStatusPageRoutingModule {}
